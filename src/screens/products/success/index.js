import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../../../shared/CustomButton';

const ProductSuccess = ({navigation}) => {
    const onClose = () => {
        navigation.navigate('Products');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Product Details</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.textLarge}>Thanks!</Text>
                <Text style={styles.textSmall}>
                    Your product has been successfully added.
                </Text>
            </View>

            <View style={styles.closeButton}>
                <CustomButton text="Close" onPress={() => onClose()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },

    textLarge: {
        fontSize: 24,
        marginBottom: 30,
    },

    textSmall: {
        fontSize: 20,
        color: Colors.black,
    },

    header: {
        backgroundColor: Colors.black,
        height: 60,
        paddingTop: 15,
        alignItems: 'center',
    },
    addItemText: {
        fontSize: 20,
        marginBottom: 30,
    },
    text: {
        color: Colors.white,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    nextButton: {
        alignItems: 'center',
    },
    closeButton: {
        alignItems: 'center',
    },
});

export default ProductSuccess;
