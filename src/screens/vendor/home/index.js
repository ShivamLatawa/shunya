import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
    getProductCategories,
    getProductDetails,
} from '../../../services/productService';
import Product from '../../farmer/products/product';
import CustomButton from '../../../shared/CustomButton';
import {addOrder} from '../../../services/orderService';

const VendorHomeScreen = () => {
    const [productDetails, setProductDetails] = useState([]);
    const [productCategories, setProductCategories] = useState([]);
    const [accepted, setAccepted] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            getProductDetails().then((result) => {
                setProductDetails(result);
            });
        };

        fetchData();
    }, []);

    useEffect(() => {
        getProductCategories().then((result) => setProductCategories(result));
    }, []);

    const renderProductDetails = () => {
        return (
            productCategories.length > 0 &&
            productDetails.map((productDetail) => {
                const productCategory = productCategories.find(
                    (category) => productDetail.id === category.id,
                );
                const product = {
                    id: productDetail.id,
                    quantity: productDetail.quantity,
                    price: productDetail.pricePerUnit,
                    name: productCategory.name,
                    farmerId: productDetail.farmerId,
                };

                return (
                    <Product key={product.id} product={product}>
                        {!accepted ? (
                            <>
                                <CustomButton
                                    text="Accept"
                                    onPress={() => onAccept(product)}
                                />
                                <CustomButton
                                    mode="default"
                                    text="Decline"
                                    labelStyle={styles.declineBtn}
                                    onPress={onDecline}
                                />
                            </>
                        ) : (
                            <CustomButton
                                text="Order Accepted"
                                mode="default"
                            />
                        )}
                    </Product>
                );
            })
        );
    };

    const onAccept = async (product) => {
        const user = await AsyncStorage.getItem('user');
        const request = {
            farmerId: product.farmerId,
            productDetailsId: product.id,
            vendorId: JSON.parse(user).id,
            deliveryLocation: 'Gurugram',
        };
        const result = await addOrder(request);
        if (result.id) {
            setAccepted(true);
        }
    };
    const onDecline = () => {};

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Shunya</Text>
                </View>

                <ScrollView style={styles.content}>
                    <Text style={styles.title}>Products Available</Text>
                    <ScrollView style={styles.scrollView}>
                        {renderProductDetails()}
                    </ScrollView>
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#1976d2',
        height: 100,
        paddingTop: 20,
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    title: {
        color: Colors.dark,
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    content: {
        padding: 20,
    },
    scrollView: {
        paddingBottom: 200,
    },
    declineBtn: {
        color: 'red',
    },
});

export default VendorHomeScreen;
