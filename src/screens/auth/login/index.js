import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import CustomTextInput from '../../../shared/CustomTextInput';
import CustomButton from '../../../shared/CustomButton';
import styles from '../../../styles/login';
import inputStyles from '../../../styles/input';
import brandStyles from '../../../styles/brand';
import {login} from '../../../services/authService';

const LoginScreen = ({navigation}) => {
    const [contactNumber, setContactNumber] = useState();
    const [password, setPassword] = useState();

    const onLogin = () => {
        if (!contactNumber || !password) {
            alert('Please fill the details!');
            return;
        }

        const request = {
            mobileNo: contactNumber,
            password,
        };

        login(request)
            .then((response) => {
                const authToken = response.headers.get('authorization');
                AsyncStorage.setItem('user_token', authToken);
                navigation.navigate('Home');
            })
            .catch(() => alert('Invalid login!'));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={brandStyles.brand}>Shunya</Text>

            <CustomTextInput
                value={contactNumber}
                style={inputStyles.input}
                placeholder="Contact Number"
                keyboardType="numeric"
                onChange={(value) => setContactNumber(value)}
            />

            <CustomTextInput
                value={password}
                style={inputStyles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChange={(value) => setPassword(value)}
            />

            <CustomButton text="Login" onPress={onLogin} />

            <View style={styles.createAccountWrapper}>
                <Text style={styles.newAccountText}>Create a New Account?</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
