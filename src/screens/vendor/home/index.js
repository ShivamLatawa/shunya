import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
    getProductCategories,
    getProductDetails,
    getProductDetailsForFarmer,
} from '../../services/productService';
import Product from '../products/product';

const HomeScreen = () => {
    const [productDetails, setProductDetails] = useState([]);
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = await AsyncStorage.getItem('user');
            getProductDetails(JSON.parse(user).id).then((result) => {
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
                    (category) => productDetail.productId === category.id,
                );

                const product = {
                    id: productDetail.id,
                    quantity: productDetail.quantity,
                    price: productDetail.pricePerUnit,
                    name: productCategory.name,
                };

                return <Product key={product.id} product={product}></Product>;
            })
        );
    };

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
});

export default HomeScreen;
