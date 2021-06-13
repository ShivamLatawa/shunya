import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';
import uniqWith from 'lodash.uniqwith';
import isEqual from 'lodash.isequal';

import Order from './order';
import {getOrderDetailsForVendor} from '../../../services/orderService';
import {getProductDetails} from '../../../services/productService';

const OrdersScreen = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = await AsyncStorage.getItem('user');
            getOrderDetailsForVendor(JSON.parse(user).id).then((result) => {
                const uniqueOrders = uniqWith(
                    result,
                    (order, anotherOrder) =>
                        order.farmerId === anotherOrder.farmerId &&
                        order.productDetailsId ===
                            anotherOrder.productDetailsId &&
                        order.vendorId === anotherOrder.vendorId,
                );
                setOrderDetails(uniqueOrders);
            });
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            getProductDetails().then((result) => {
                setProductDetails(result);
            });
        };

        fetchData();
    }, []);

    const renderOrderDetails = () => {
        return (
            productDetails.length > 0 &&
            orderDetails.map((order) => {
                const productDetail = productDetails.find(
                    (product) => order.productDetailsId === product.id,
                );

                const orderInfo = {
                    id: order.id,
                    quantity: productDetail.quantity,
                    price: productDetail.pricePerUnit,
                    name: productDetail.productCategory.name,
                    status: order.delivered,
                    farmerId: order.farmerId,
                };

                return <Order key={order.id} order={orderInfo}></Order>;
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
                    <Text style={styles.title}>Order Details</Text>
                    <ScrollView style={styles.scrollView}>
                        {renderOrderDetails()}
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

export default OrdersScreen;
