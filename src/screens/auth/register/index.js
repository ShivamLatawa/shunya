import React, {useState} from 'react';
import {format} from 'date-fns';
import {faPhoneAlt, faLock} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import CustomDatePicker from '../../../shared/CustomDatePicker';
import CustomTextInput from '../../../shared/CustomTextInput';
import CustomButton from '../../../shared/CustomButton';
import {signUp} from '../../../services/authService';
import styles from '../../../styles/register';
import inputStyles from '../../../styles/input';
import brandStyles from '../../../styles/brand';

const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [dob, setDobInInput] = useState(new Date());
    const [role, setRole] = useState('farmer');
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onSignUp = () => {
        if (!username || !contactNumber || !dob || !role || !password) {
            alert('Please fill all the details!');
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
            .then(() => navigation.navigate('Login'))
            .catch((err) => console.error(err));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={brandStyles.brand}>Shunya</Text>

            <CustomTextInput
                value={username}
                style={inputStyles.input}
                icon={faUser}
                placeholder="Username"
                onChange={(value) => setUsername(value)}
            />

            <CustomTextInput
                value={contactNumber}
                style={inputStyles.input}
                icon={faPhoneAlt}
                placeholder="Contact Number"
                keyboardType="numeric"
                onChange={(value) => setContactNumber(value)}
            />

            <View style={inputStyles.dateInput}>
                <CustomTextInput
                    placeholder="DD/MM/YYYY"
                    style={inputStyles.input}
                    onFocus={() => setShowDatePicker(true)}
                    value={format(dob, 'dd-MM-yyyy')}
                />
                <CustomDatePicker
                    show={showDatePicker}
                    setDateInInput={(value) => setDobInInput(value)}
                    setShow={(value) => setShowDatePicker(value)}
                />
            </View>

            <View>
                <Picker
                    selectedValue={role}
                    mode="dropdown"
                    style={inputStyles.picker}
                    onValueChange={(value) => setRole(value)}>
                    <Picker.Item label="Select Role" value="" />
                    <Picker.Item label="Farmer" value="farmer" />
                    <Picker.Item label="Vendor" value="vendor" />
                </Picker>
            </View>

            <CustomTextInput
                value={password}
                style={inputStyles.input}
                icon={faLock}
                placeholder="Password"
                secureTextEntry={true}
                onChange={(value) => setPassword(value)}
            />

            <CustomTextInput
                value={confirmPassword}
                style={inputStyles.input}
                icon={faLock}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChange={(value) => setConfirmPassword(value)}
            />

            <CustomButton
                mode="contained"
                text="Sign Up"
                onPress={() => onSignUp()}
            />

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
