import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from "react-native-material-ui";
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const CustomButton = ({text, onPress}) => {
    return (
        <Button raised primary text={text} onPress={onPress}/>
    );
};

const styles = StyleSheet.create({});

export default CustomButton;
