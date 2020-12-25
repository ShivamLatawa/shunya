import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../auth/login';
import RegisterScreen from '../auth/register';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
