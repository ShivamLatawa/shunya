import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export const Product = ({product}) => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Divider />
            <View>
                <Text>Quantity: {product.quantity} kg</Text>
                <Text>Price/Kg: {product.price}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {},
});

export default Product;
