import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import VendorHomeScreen from '../vendor/home';

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
        </Tab.Navigator>
    );
};

export default VendorFlowNavigator;
