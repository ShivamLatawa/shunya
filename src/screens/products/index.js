import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../../shared/CustomButton';

const ProductsScreen = ({navigation}) => {
    const onAdd = () => {
        navigation.navigate('Add');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Shunya</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.addButton}>
                    <CustomButton text="Add" onPress={() => onAdd()} />
                </View>

                <ScrollView></ScrollView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    header: {
        backgroundColor: Colors.black,
        height: 150,
        paddingTop: 30,
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    addButton: {
        alignItems: 'flex-end',
    },
    content: {
        padding: 20,
    },
});

export default ProductsScreen;
