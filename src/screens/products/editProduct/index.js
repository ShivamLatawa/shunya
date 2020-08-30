import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const EditProduct = () => {
    const headers = ['Product Name', 'Quantity', 'Price/Kg'];
    const tableData = [['Apple', '30', '100']];
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
                        data={tableData}
                        flexArr={[2, 1, 1]}
                        style={styles.row}
                        textStyle={styles.text}
                    />
                </Table>
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
    row: {height: 100},
    text: {textAlign: 'center'},
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
});

export default EditProduct;
