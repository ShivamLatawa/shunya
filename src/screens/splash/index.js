import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';

export const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_token').then((token) => {
                token
                    ? navigation.navigate('Home')
                    : navigation.navigate('Auth');
            });
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.brand}>Shunya</Text>
            <ActivityIndicator color="#FFFFFF" size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brand: {
        fontSize: 48,
        fontWeight: 'bold',
        color: Colors.white,
        fontStyle: 'italic',
    },
});

export default SplashScreen;
