import React from 'react';
import {
    ScrollView,
    Text, View,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import {getProductDetails} from "../../services/productService";
import {getOrderDetails} from "../../services/orderService";
import {useEffect} from "react/cjs/react.production.min";
import Product from "../products/product";


const OrdersScreen = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [orderCategories, setOrderCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = await AsyncStorage.getItem('user');
            getOrderDetails()(JSON.parse(user).id).then((result) => {
                setOrderDetails(result);
            });
        };

        fetchData();
    }, []);

    const renderOrderDetails = () => {
        return (
            orderCategories.length > 0 &&
            orderDetails.map((orderDetail) => {
                const orderCategory = orderCategories.find(
                    (category) => orderDetail.orderId === category.id,
                );

                const product = {
                    id: orderDetail.id,
                    quantity: orderDetail.quantity,
                    price: orderDetail.pricePerUnit,
                    name: orderCategory.name,
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
                    <Text style={styles.title}>Orders till now</Text>
                    <ScrollView style={styles.scrollView}>
                        {renderOrderDetails()}
                    </ScrollView>
                </ScrollView>
            </View>
        </>
    );
};


export default OrdersScreen;
