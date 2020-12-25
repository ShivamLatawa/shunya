import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-material-ui';

export const Product = ({product}) => {
    return (
        <Card style={{container: styles.container}}>
            <Text style={styles.name}>{product.name}</Text>
            <View>
                <Text style={styles.info}>Quantity: {product.quantity} kg</Text>
                <Text style={styles.info}>Price/Kg: {product.price}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
    },
    name: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    info: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Product;
