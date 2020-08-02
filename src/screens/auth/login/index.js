import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";

import CustomTextInput from "../../../shared/CustomTextInput";
import CustomButton from "../../../shared/CustomButton";

import styles from "../../../styles/login";
import brandStyles from "../../../styles/brand";


const LoginScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
        <Text style={brandStyles.brand}>Shunya</Text>

        <CustomTextInput icon={faUser} placeholder="Username"/>

        <CustomTextInput icon={faLock} placeholder="**********" secureTextEntry={true}/>

        <CustomButton text="Login"/>

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
