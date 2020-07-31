import React from 'react';
import {SafeAreaView, Text, TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    brand: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center',
        marginBottom: 30
    },

    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderRadius: 50,
        borderWidth: 1,
        marginBottom: 30,
        paddingLeft: 20
    },

    loginBtn: {
        height: 40,
        width: 100,
        backgroundColor: '#D14E32',
        borderRadius: 50,
        alignItems: "center",
        padding: 10,
        marginBottom: 20
    },

    buttonText: {
        color: Colors.white
    },

    newAccountText: {
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
    },

    signUp: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },

    createAccountWrapper: {
        flexDirection: 'row',
    },
});


export default LoginScreen;
