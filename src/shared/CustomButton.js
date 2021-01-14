import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export const CustomButton = ({
    text,
    onPress,
    mode = 'contained',
    uppercase = true,
    labelStyle,
}) => {
    return (
        <Button
            labelStyle={labelStyle}
            mode={mode}
            uppercase={uppercase}
            onPress={onPress}>
            {text}
        </Button>
    );
};

const styles = StyleSheet.create({});

export default CustomButton;
