import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import {Card, Divider, Title, Paragraph} from 'react-native-paper';

import CustomButton from '../../../../shared/CustomButton';
import {getUserInfo} from '../../../../services/authService';

const Order = ({order}) => {
    const shareLocation = async () => {
        console.log({order});
        // TODO: need an api to get the user info with id to share whatsapp location
        const user = await getUserInfo(order.farmerId);

        const whatsAppMsg = `Location details for the order 
        ${order.name}
        ${order.price}
        ${order.quantity}
        `;
        const mobileNumber = user.mobileNo;

        console.log({user, mobileNumber, whatsAppMsg});

        let url =
            'whatsapp://send?text=' + whatsAppMsg + '&phone=91' + mobileNumber;
        Linking.openURL(url)
            .then(() => {
                console.log('Success');
            })
            .catch(() => {
                alert(
                    'Make sure Whatsapp is installed on your device to share location',
                );
            });
    };

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
                <CustomButton
                    mode="default"
                    text="Share location"
                    onPress={shareLocation}
                />
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
        fontSize: 18,
        color: 'green',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default Order;
