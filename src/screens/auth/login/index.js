import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faLock} from "@fortawesome/free-solid-svg-icons";

import CustomTextInput from "../../../shared/CustomTextInput";

import CustomButton from "../../../shared/CustomButton";
import styles from "../../../styles/login";
import brandStyles from "../../../styles/brand";
import {login} from "../../../services/authService";


const LoginScreen = ({navigation}) => {

    const [contactNumber, setContactNumber] = useState();
    const [password, setPassword] = useState();

    const onLogin = () => {

        if (!contactNumber || !password) {
            alert("Please fill the details!");
            return;
        }

        const request = {
            mobileNo: contactNumber,
            password,
        };

        console.log("request --> ", request);

        login(request)
            .then(() => navigation.navigate('Home'))
            .catch(() => alert('Invalid login!'))
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={brandStyles.brand}>Shunya</Text>

            <CustomTextInput
                icon={faPhoneAlt}
                placeholder="Contact Number"
                onChange={(value) => setContactNumber(value)}/>

            <CustomTextInput
                icon={faLock}
                placeholder="**********"
                secureTextEntry={true}
                onChange={(value) => setPassword(value)}
            />

            <CustomButton text="Login" onPress={onLogin}/>

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
}

export default LoginScreen;
