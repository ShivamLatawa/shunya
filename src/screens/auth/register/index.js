import React, {useState} from 'react';
import {format} from 'date-fns';
import {faPhoneAlt, faLock} from "@fortawesome/free-solid-svg-icons";
import {faCalendar, faUser, faIdCard} from "@fortawesome/free-regular-svg-icons";
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
import CustomTextInput from "../../../shared/CustomTextInput";
import CustomButton from "../../../shared/CustomButton";

import {signUp} from "../../../services/authService";

import styles from "../../../styles/register";
import inputStyles from "../../../styles/input";
import iconStyles from "../../../styles/icon";
import brandStyles from "../../../styles/brand";


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
            <Text style={brandStyles.brand}>Shunya</Text>

            <CustomTextInput
                icon={faUser}
                placeholder="Username"
                onChange={(value) => setUsername(value)}/>

            <CustomTextInput
                icon={faPhoneAlt}
                placeholder="Contact Number"
                keyboardType="numeric"
                onChange={(value) => setContactNumber(value)}/>

            <View style={inputStyles.dateInput}>
                <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                >
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size={20}
                        style={iconStyles.icon}
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

            <View style={inputStyles.input}>
                <FontAwesomeIcon
                    icon={faIdCard}
                    size={20}
                    style={iconStyles.icon}
                />
                <Picker
                    selectedValue={role}
                    style={inputStyles.picker}
                    onValueChange={(value) => setRole(value)}>
                    <Picker.Item label="Farmer" value="farmer"/>
                    <Picker.Item label="Vendor" value="vendor"/>
                </Picker>
            </View>

            <CustomTextInput
                icon={faLock}
                placeholder="Password"
                secureTextEntry={true}
                onChange={(value) => setPassword(value)}/>

            <CustomTextInput
                icon={faLock}
                placeholder="Confirm Password"
                secureTextEntry={true}/>

            <CustomButton text="Sign Up" onPress={() => onSignUp()}/>

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

