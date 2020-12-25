import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import SellProductNavigator from './ProductNavigator';
import SplashScreen from '../splash';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Home" component={AppNavigator} />
            <Stack.Screen name="Sell" component={SellProductNavigator} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
