import React from 'react';
import {SafeAreaView, Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from "../../../styles/login";

const LoginScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
        <Text style={styles.brand}>Shunya</Text>

        <TextInput
            style={styles.input}
            autoCompleteType="username"
            placeholder="Username"
        />

        <TextInput
            style={styles.input}
            autoCompleteType="password"
            placeholder="**********"
            secureTextEntry={true}
        />

        <TouchableOpacity
            style={styles.loginBtn}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.createAccountWrapper}>
            <Text style={styles.newAccountText}>
                Create a New Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
);

export default LoginScreen;
