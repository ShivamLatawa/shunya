import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Divider, Title, Paragraph} from 'react-native-paper';

const Order = ({order}) => {
    return (
        <Card style={styles.container}>
            <Card.Content>
                <Title style={styles.name}>{order.name}</Title>

                <Divider />
                <Paragraph style={styles.info}>Price: {order.price}</Paragraph>
                <Paragraph style={styles.info}>
                    Quantity: {order.quantity}
                </Paragraph>
                <Paragraph style={styles.deliveryStatus}>
                    Delivery Status:{' '}
                    {order.status ? 'Delivered' : 'In Progress'}
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
    deliveryStatus: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: 'green',
    },
});

export default Order;
