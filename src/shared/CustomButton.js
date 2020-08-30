import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const CustomButton = ({text, onPress, backgroundColor = '#D14E32'}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 100,
        backgroundColor: `${backgroundColor}`,
        borderRadius: 50,
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
    },

    text: {
        color: Colors.white,
    },
});

export default CustomButton;
