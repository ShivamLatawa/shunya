import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {CustomButton} from '../../../shared/CustomButton';
import {addProduct} from '../../../services/productService';

const EditProduct = ({navigation}) => {
    const {item, quantity, price, id} = navigation.getParam('product');
    const details = [item, quantity, price];
    const headers = ['Product Name', 'Quantity', 'Price/Kg'];

    const onEdit = () => {
        navigation.navigate('Sell');
    };

    const onConfirm = () => {
        const request = {
            farmerId: 1,
            productId: id,
            quantity,
            pricePerUnit: price,
        };

        addProduct(request)
            .then((response) => {
                navigation.navigate('Success');
            })
            .catch((err) => console.error('something went wrong -->', error));
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
                        style={styles.head}
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
        flex: 1,
        padding: 30,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    head: {height: 40, backgroundColor: '#f1f8ff'},
    title: {flex: 1, backgroundColor: '#f6f8fa'},
    row: {height: 200},
    text: {textAlign: 'center', fontSize: 18},
    headerText: {
        color: Colors.white,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: Colors.black,
        height: 60,
        paddingTop: 15,
        alignItems: 'center',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
    },
});

export default EditProduct;
