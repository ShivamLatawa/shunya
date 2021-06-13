import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {CustomButton} from '../../../../shared/CustomButton';
import {addProduct} from '../../../../services/productService';

const EditProduct = ({route, navigation}) => {
    const {item, quantity, price, id} = route.params.product;
    const details = [item, quantity, price];
    const headers = ['Product Name', 'Quantity', 'Price/Kg'];

    const onEdit = () => {
        navigation.navigate('Sell');
    };

    const onConfirm = () => {
        console.log('initialising request');
        AsyncStorage.getItem('user').then((user) => {
            console.log('user', JSON.parse(user));
            const request = {
                farmerId: JSON.parse(user).id,
                productId: id,
                quantity,
                pricePerUnit: price,
            };

            console.log('request', request);

            addProduct(request)
                .then(() => navigation.navigate('Success'))
                .catch((err) => console.error('something went wrong -->', err));
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Product Details</Text>
            </View>

            <View style={styles.tableContainer}>
                <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                        {headers.map((header) => (
                            <DataTable.Title key={header}>
                                {header}
                            </DataTable.Title>
                        ))}
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>{details[0]}</DataTable.Cell>
                        <DataTable.Cell>{details[1]}</DataTable.Cell>
                        <DataTable.Cell>{details[2]}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>

                <View style={styles.buttons}>
                    <CustomButton text="Edit" onPress={() => onEdit()} />
                    <CustomButton text="Confirm" onPress={() => onConfirm()} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tableContainer: {
        paddingTop: 60,
        padding: 25,
        backgroundColor: '#fff',
        flex: 1,
    },
    tableHeader: {backgroundColor: '#f1f8ff'},
    headerText: {
        color: Colors.white,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: '#1976d2',
        height: 100,
        paddingTop: 20,
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        padding: 25,
    },
});

export default EditProduct;
