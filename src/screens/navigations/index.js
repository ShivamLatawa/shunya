import React, {useEffect, useMemo, useReducer} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import FarmerFlowNavigator from './FarmerFlowNavigator';
import SellProductNavigator from './ProductNavigator';
import SplashScreen from '../splash';
import AsyncStorage from '@react-native-community/async-storage';

import {getUserInfo} from '../../services/authService';
import {AuthContext} from '../../context/AuthContext';
import VendorFlowNavigator from './VendorFlowNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                        userRole: action.userRole,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        userRole: action.userRole,
                        isLoading: false,
                    };
            }
        },
        {
            isLoading: true,
            userToken: null,
            userRole: null,
        },
    );

    const authContextValue = useMemo(
        () => ({
            signIn: (user) => {
                if (user) {
                    dispatch({
                        type: 'SIGN_IN',
                        token: user,
                        userRole: user.role,
                    });
                } else {
                }
            },
        }),
        [],
    );

    useEffect(() => {
        setTimeout(() => {
            let userToken;
            getUserInfo()
                .then((user) => {
                    userToken = user;
                    AsyncStorage.setItem('user', JSON.stringify(user));
                    dispatch({
                        type: 'RESTORE_TOKEN',
                        token: userToken,
                        userRole: user.role,
                    });
                })
                .catch(() => {
                    AsyncStorage.setItem('user_token', null);
                    AsyncStorage.setItem('user', null);
                });
        }, 2000);
    }, []);

    if (state.isLoading) {
        return <SplashScreen />;
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            <Stack.Navigator headerMode="none">
                {!state.userRole ? (
                    <Stack.Screen name="Auth" component={AuthNavigator} />
                ) : state.userRole === 'farmer' ? (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={FarmerFlowNavigator}
                        />
                        <Stack.Screen
                            name="Sell"
                            component={SellProductNavigator}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name="VendorHome"
                        component={VendorFlowNavigator}
                    />
                )}
            </Stack.Navigator>
        </AuthContext.Provider>
    );
};

export default RootNavigator;
