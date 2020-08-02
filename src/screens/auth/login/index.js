import React from 'react';
import {SafeAreaView, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";

import styles from "../../../styles/login";


const LoginScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
        <Text style={styles.brand}>Shunya</Text>

        <View style={styles.input}>
            <FontAwesomeIcon
                icon={faUser}
                size={20}
                style={styles.icon}
            />
            <TextInput
                placeholder="Username"
                autoCompleteType="username"
            />
        </View>

        <View style={styles.input}>
            <FontAwesomeIcon
                icon={faLock}
                size={20}
                style={styles.icon}
            />
            <TextInput
                autoCompleteType="password"
                placeholder="**********"
                secureTextEntry={true}
            />
        </View>

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
