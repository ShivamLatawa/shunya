import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Divider, Title, Paragraph} from 'react-native-paper';

const Order = ({order}) => {
    return (
        <Card style={styles.container}>
            <Card.Content>
                <Title style={styles.name}>Apples</Title>
                <Divider />
                <Paragraph style={styles.info}>
                    Vendor: {order.vendorId}
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

export default Order;
