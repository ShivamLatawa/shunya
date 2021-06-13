import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getOrderDetailsForFarmer} from '../../../services/orderService';
import Order from './order';

const OrdersScreen = () => {
    const [orders, setOrders] = useState([]);
    const renderOrderDetails = () => {
        console.log({orders});
        return orders.map((order) => <Order order={order} />);
    };

    useEffect(() => {
        const fetchOrders = async () => {
            const user = await AsyncStorage.getItem('user');
            const orders = await getOrderDetailsForFarmer(JSON.parse(user).id);

            setOrders(orders);
        };

        fetchOrders();
    }, []);

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
