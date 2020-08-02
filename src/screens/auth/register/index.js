import React, {useState} from 'react';
import {format} from 'date-fns';
import {faPhoneAlt, faLock} from "@fortawesome/free-solid-svg-icons";
import {faCalendar, faUser,faIdCard} from "@fortawesome/free-regular-svg-icons";
import {
    ScrollView,
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
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.brand}>Shunya</Text>

            <View style={styles.input}>
                <FontAwesomeIcon
                    icon={faUser}
                    size={20}
                    style={styles.icon}
                />
                <TextInput

                    placeholder="Username"
                    onChangeText={(value) => {
                        setUsername(value)
                    }}
                />
            </View>

            <View style={styles.input}>
                <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size={20}
                    style={styles.icon}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder="Contact Number"
                    onChangeText={(value) => setContactNumber(value)}
                />
            </View>

            <View style={styles.dateInput}>
                <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                >
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size={20}
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
                <FontAwesomeIcon
                    icon={faIdCard}
                    size={20}
                    style={styles.icon}
                />
                <Picker
                    selectedValue={role}
                    style={styles.picker}
                    onValueChange={(value) => setRole(value)}>
                    <Picker.Item label="Farmer" value="farmer"/>
                    <Picker.Item label="Vendor" value="vendor"/>
                </Picker>
            </View>

            <View style={styles.input}>
                <FontAwesomeIcon
                    icon={faLock}
                    size={20}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>

            <View style={styles.input}>
                <FontAwesomeIcon
                    icon={faLock}
                    size={20}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
            </View>

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
        </ScrollView>
    );
};

export default RegisterScreen;

