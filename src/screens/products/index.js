import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
    getProductDetails,
    getProductCategories,
} from '../../services/productService';
import CustomButton from '../../shared/CustomButton';
import Product from './product';

const ProductsScreen = ({navigation}) => {
    const [productDetails, setProductDetails] = useState([]);
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        getProductDetails().then((result) => setProductDetails(result));
    }, []);

    useEffect(() => {
        getProductCategories().then((result) => setProductCategories(result));
    }, []);

    const onAdd = () => {
        navigation.navigate('Add');
    };

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Shunya</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.addButton}>
                    <CustomButton text="Add" onPress={() => onAdd()} />
                </View>

                <ScrollView>{renderProductDetails()}</ScrollView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    header: {
        backgroundColor: Colors.black,
        height: 150,
        paddingTop: 30,
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    addButton: {
        alignItems: 'flex-end',
    },
    content: {
        padding: 20,
    },
    productContainer: {},
});

export default ProductsScreen;
