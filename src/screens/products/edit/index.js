import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {CustomButton} from '../../../shared/CustomButton';
import {addProduct} from '../../../services/productService';

const EditProduct = ({route, navigation}) => {
    const {item, quantity, price, id} = route.params.product;
    const details = [item, quantity, price];
    const headers = ['Product Name', 'Quantity', 'Price/Kg'];

    const onEdit = () => {
        navigation.navigate('Sell');
    };

    const onConfirm = () => {
        AsyncStorage.getItem('user').then((user) => {
            const request = {
                // farmerId: JSON.parse(user).id,
                farmerId: 1,
                productId: id,
                quantity,
                pricePerUnit: price,
            };

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

            <ScrollView style={styles.tableContainer}>
                <Table borderStyle={{borderWidth: 1}}>
                    <Row
                        data={headers}
                        flexArr={[2, 1, 1]}
                        style={styles.tableHeader}
                        textStyle={styles.text}
                    />
                    <Rows
                        data={[details]}
                        flexArr={[2, 1, 1]}
                        style={styles.row}
                        textStyle={styles.text}
                    />
                </Table>

                <View style={styles.buttons}>
                    <CustomButton text="Edit" onPress={() => onEdit()} />
                    <CustomButton text="Confirm" onPress={() => onConfirm()} />
                </View>
            </ScrollView>
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
    },
    tableHeader: {height: 40, backgroundColor: '#f1f8ff'},
    title: {backgroundColor: '#f6f8fa'},
    row: {height: 200},
    text: {textAlign: 'center', fontSize: 18},
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
