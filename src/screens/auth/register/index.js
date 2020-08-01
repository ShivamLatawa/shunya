import React, {useState} from 'react';
import {format} from 'date-fns';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {
    SafeAreaView,
    Text,
    TextInput,
    Pressable,
    View,
    StyleSheet,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Picker} from '@react-native-community/picker';
import CustomDatePicker from "../../../shared/CustomDatePicker";
import {signUp} from "../../../services/loginService";

const RegisterScreen = ({navigation}) => {

    const [username, setUsername] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [dob, setDobInInput] = useState(new Date());
    const [role, setRole] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

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
            .then(res => console.log("res -->", res))
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
                <Pressable
                    onPress={() => setShowDatePicker(true)}
                >
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size={25}
                        style={styles.icon}
                    />
                </Pressable>
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
                onChangeText={(value) => setConfirmPassword(value)}
            />

            <Pressable
                style={styles.signUpBtn}
                onPress={() => onSignUp()}
            >
                <Text
                    style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.createAccountWrapper}>
                <Text style={styles.newAccountText}>
                    Already Have An Account?
                </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.login}>Login</Text>
                </Pressable>
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
        dateInput: {
            height: 40,
            width: 200,
            borderColor: 'gray',
            borderRadius: 50,
            borderWidth: 1,
            marginBottom: 30,
            paddingLeft: 20,
            flexDirection: 'row',
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

        icon: {
            position: 'relative',
            top: 5,
            marginRight: 10,
        },

        login: {
            color: Colors.black,
            fontWeight:
                'bold',
            fontSize:
                12,
            marginLeft:
                5,
        }
        ,

        createAccountWrapper: {
            flexDirection: 'row',
        }
        ,
    })
;

export default RegisterScreen;

