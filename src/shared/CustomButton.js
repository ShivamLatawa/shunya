import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export const CustomButton = ({
    text,
    onPress,
    mode = 'contained',
    uppercase = true,
    labelStyle = {text: {fontSize: 18, paddingTop: 5, paddingBottom: 8}},
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
