import React, {useState} from 'react';
import {format} from 'date-fns';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Picker} from '@react-native-community/picker';

import CustomDatePicker from "../../../shared/CustomDatePicker";
import {signUp} from "../../../services/loginService";
import styles from "../../../styles/register";


const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [dob, setDobInInput] = useState(new Date());
    const [role, setRole] = useState("farmer");
    const [password, setPassword] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onSignUp = () => {
        if (!username || !contactNumber || !dob || !role || !password) {
            alert("Please fill all the details!");
            return;
        }

        const request = {
            name: username,
            mobileNo: contactNumber,
            password,
            dob: format(dob, 'yyyy-MM-dd'),
            role,
        };

        signUp(request)
            .then(() => navigation.navigate('Home'))
            .catch(err => console.log("err -->", err));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.brand}>Shunya</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(value) => {
                    setUsername(value)
                }}
            />

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Contact Number"
                onChangeText={(value) => setContactNumber(value)}
            />

            <View style={styles.dateInput}>
                <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                >
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size={25}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="DD/MM/YYYY"
                    value={format(dob, 'dd-MM-yyyy')}
                />
                <CustomDatePicker
                    show={showDatePicker}
                    setDateInInput={setDobInInput}
                    setShow={setShowDatePicker}
                />
            </View>

            <View style={styles.input}>
                <Picker
                    selectedValue={role}
                    style={styles.picker}
                    onValueChange={(value) => setRole(value)}>
                    <Picker.Item label="Farmer" value="farmer"/>
                    <Picker.Item label="Vendor" value="vendor"/>
                </Picker>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => onSignUp()}
            >
                <Text
                    style={styles.buttonText}>Sign Up</Text>
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

export default RegisterScreen;

