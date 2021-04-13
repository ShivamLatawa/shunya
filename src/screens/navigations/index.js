import React, {useEffect, useMemo, useReducer} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import SellProductNavigator from './ProductNavigator';
import SplashScreen from '../splash';
import AsyncStorage from '@react-native-community/async-storage';

import {getUserInfo} from '../../services/authService';
import {AuthContext} from '../../context/AuthContext';

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
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        userToken: action.token,
                    };
            }
        },
        {
            isLoading: true,
            userToken: null,
        },
    );

    const authContextValue = useMemo(
        () => ({
            signIn: (userToken) => {
                if (userToken) {
                    dispatch({type: 'SIGN_IN', token: userToken});
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
                })
                .catch(() => {
                    AsyncStorage.setItem('user_token', null);
                    AsyncStorage.setItem('user', null);
                });
            dispatch({type: 'RESTORE_TOKEN', token: userToken});
        }, 2000);
    }, []);

    if (state.isLoading) {
        return <SplashScreen />;
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            <Stack.Navigator headerMode="none">
                {state.userToken ? (
                    <>
                        <Stack.Screen name="Home" component={AppNavigator} />
                        <Stack.Screen
                            name="Sell"
                            component={SellProductNavigator}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Auth" component={AuthNavigator} />
                    </>
                )}
            </Stack.Navigator>
        </AuthContext.Provider>
    );
};

export default RootNavigator;
