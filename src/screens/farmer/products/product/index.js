import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Divider, Title, Paragraph} from 'react-native-paper';

export const Product = ({product}) => {
    return (
        <Card style={styles.container}>
            <Card.Content>
                <Title style={styles.name}>{product.name}</Title>
                <Divider />
                <Paragraph style={styles.info}>
                    Quantity: {product.quantity} kg
                </Paragraph>
                <Paragraph style={styles.info}>
                    Price/Kg: {product.price}
                </Paragraph>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 10,
    },
    info: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Product;
