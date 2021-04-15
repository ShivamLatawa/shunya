import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import {Card, Divider, Title, Paragraph} from 'react-native-paper';
import CustomButton from '../../../../shared/CustomButton';

const Order = ({order}) => {
    const shareLocation = () => {
        const whatsAppMsg = 'test';
        const mobileNumber = '8800900134';
        let url =
            'whatsapp://send?text=' + whatsAppMsg + '&phone=91' + mobileNumber;
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            });
    };

    return (
        <Card style={styles.container}>
            <Card.Content>
                <Title style={styles.name}>Apples</Title>
                <Divider />
                <Paragraph style={styles.info}>
                    Vendor: {order.vendorId}
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
});

export default Order;
