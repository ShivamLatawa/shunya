import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export const CustomTextInput = ({
    icon,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    onChange = () => {},
    style,
    value = '',
    onFocus = () => {},
}) => {
    return (
        <View style={style}>
            <TextInput.Icon name={icon}></TextInput.Icon>
            <TextInput
                value={value}
                onFocus={onFocus}
                secureTextEntry={secureTextEntry}
                type="outlined"
                keyboardType={keyboardType}
                label={placeholder}
                onChangeText={onChange}
            />
        </View>
    );
};

export default CustomTextInput;
