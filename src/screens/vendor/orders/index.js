import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Order from './order';
import AsyncStorage from "@react-native-community/async-storage";
import {getOrderDetailsForVendor} from "../../../services/orderService";

const OrdersScreen = () => {
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = await AsyncStorage.getItem('user');
            getOrderDetailsForVendor(user.get('id')).then((result) => {
                setOrderDetails(result);
            });
        };

        fetchData();
    }, []);

    const renderOrderDetails = () => {
        return (
            orderDetails.map((orderDetail) => {

                const order = {
                    id: orderDetail.id,
                    quantity: orderDetail.quantity,
                    price: orderDetail.pricePerUnit,
                    name: orderDetail.name,
                };

                return <Order key={order.id} order={order}></Order>;
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
