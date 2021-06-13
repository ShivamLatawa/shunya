import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../farmer/home';
import OrdersScreen from '../farmer/orders';
import ProductsScreen from '../farmer/products';
import SupportScreen from '../farmer/support';
import Logout from '../auth/logout';

const Tab = createMaterialBottomTabNavigator();

const FarmerFlowNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            headerMode="none"
            backgroundColor="#1976d2"
            activeColor="#ffffff">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="cart"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    tabBarLabel: 'Products',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="package-variant"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Logout"
                component={Logout}
                options={{
                    tabBarLabel: 'Logout',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="logout"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default FarmerFlowNavigator;
