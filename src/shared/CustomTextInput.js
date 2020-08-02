import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {TextInput, View} from "react-native";
import inputStyles from "../styles/input";
import iconStyles from "../styles/icon";


export const CustomTextInput = ({
                                    icon,
                                    placeholder,
                                    secureTextEntry = false,
                                    keyboardType = "default",
                                    onChange = () => {
                                    }
                                }) => {

    return (
        <View style={inputStyles.input}>
            <FontAwesomeIcon
                icon={icon}
                size={20}
                style={iconStyles.icon}
            />
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onChangeText={onChange}
            />
        </View>
    );
};

export default CustomTextInput;
