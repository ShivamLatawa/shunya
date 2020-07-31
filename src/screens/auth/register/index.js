import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Picker} from '@react-native-community/picker';
import CustomDatePicker from "../../../shared/CustomDatePicker";

const RegisterScreen = ({navigation}) => {

    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.brand}>Shunya</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
            />

            <TextInput
                style={styles.input}
                placeholder="Contact Number"
            />

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    onFocus={() => setShowDatePicker(true)}
                    onBlur={() => setShowDatePicker(false)}
                />
                <CustomDatePicker
                    style={styles.input}
                    show={showDatePicker}
                />
            </View>


            <View style={styles.input}>
                <Picker
                    style={styles.picker}
                    onValueChange={() => {
                    }}>
                    <Picker.Item label="Farmer" value="farmer"/>
                </Picker>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.signUpBtn}>

                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.createAccountWrapper}>
                <Text style={styles.newAccountText}>
                    Already Have An Account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

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

    picker: {
        width: 200,
        position: 'relative',
        bottom: 7,
        right: 10,
    },

    selectWrapper: {
        width: 200,
        borderWidth: 1,
        borderColor: 'gray',
    },

    signUpBtn: {
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

    login: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },

    createAccountWrapper: {
        flexDirection: 'row',
    },
});

export default RegisterScreen;

