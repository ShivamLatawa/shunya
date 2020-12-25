import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {isAuthenticated} from '../../services/authService';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            isAuthenticated()
                .then((user) => {
                    if (user.role === 'farmer') {
                        navigation.navigate('Products');
                    }
                })
                .catch((error) =>
                    error.status === 403 ? navigation.navigate('Auth') : null,
                );
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
