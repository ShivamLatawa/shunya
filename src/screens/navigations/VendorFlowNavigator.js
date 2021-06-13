import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import VendorHomeScreen from '../vendor/home';
import OrdersScreen from '../vendor/orders';
import Logout from '../auth/logout';

const Tab = createMaterialBottomTabNavigator();

const VendorFlowNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="VendorHome"
            headerMode="none"
            backgroundColor="#1976d2"
            activeColor="#ffffff">
            <Tab.Screen
                name="VendorHome"
                component={VendorHomeScreen}
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

export default VendorFlowNavigator;
