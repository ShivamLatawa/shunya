import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-material-ui';

export const CustomButton = ({
    text,
    onPress,
    primary = true,
    accent = false,
}) => {
    return (
        <Button
            raised
            primary={primary}
            accent={accent}
            text={text}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({});

export default CustomButton;
