import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card} from 'react-native-elements';

export const Product = ({product}) => {
    return (
        <Card>
            <Card.Title>{product.id}</Card.Title>
            <Card.Divider />
            <View>
                <Text>{product.quantity}</Text>
                <Text>{product.pricePerUnit}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    text: {
        color: Colors.white,
    },
});

export default Product;
