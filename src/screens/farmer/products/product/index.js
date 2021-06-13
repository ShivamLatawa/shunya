import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Divider, Title, Paragraph} from 'react-native-paper';

export const Product = ({product, children}) => {
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
            {children && <View style={styles.btns}>{children}</View>}
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
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    btns: {
        marginTop: 20,
    },
});

export default Product;
