import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Picker} from '@react-native-picker/picker';
import {faRupeeSign, faWeight} from '@fortawesome/free-solid-svg-icons';

import {CustomTextInput} from '../../../../shared/CustomTextInput';
import {CustomButton} from '../../../../shared/CustomButton';
import {getProductCategories} from '../../../../services/productService';
import inputStyles from '../../../../styles/input';

export const SellProduct = ({navigation}) => {
    const [item, setItem] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        getProductCategories().then((result) => setProductCategories(result));
    }, []);

    const onNext = () => {
        if (!item || !quantity || !price) {
            alert('Please fill the details!');
            return;
        }
        const product = {
            item,
            quantity,
            price,
            id: productCategories.find((product) => product.name === item).id,
        };
        navigation.navigate('Edit', {product});
    };

    const onCancel = () => {
        navigation.navigate('Products');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Upload Items</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.addItem}>
                    <Text style={styles.addItemText}>Sell Item</Text>
                </View>
                <View style={inputStyles.input}>
                    <Picker
                        selectedValue={item}
                        mode="dropdown"
                        style={inputStyles.picker}
                        onValueChange={(value) => setItem(value)}>
                        <Picker.Item label="Select Category" value="" />
                        {productCategories.map((product) => (
                            <Picker.Item
                                key={product.id}
                                label={product.name}
                                value={product.name}
                            />
                        ))}
                    </Picker>
                </View>

                <View>
                    <CustomTextInput
                        value={price}
                        style={inputStyles.input}
                        icon={faRupeeSign}
                        placeholder="Price/Kg in INR"
                        keyboardType="numeric"
                        onChange={(value) => setPrice(value)}
                    />
                </View>

                <View>
                    <CustomTextInput
                        value={quantity}
                        style={inputStyles.input}
                        icon={faWeight}
                        placeholder="Quantity in Kg"
                        keyboardType="numeric"
                        onChange={(value) => setQuantity(value)}
                    />
                </View>

                <View style={styles.buttonsWrapper}>
                    <View style={styles.nextButton}>
                        <CustomButton text="Next" onPress={() => onNext()} />
                    </View>
                    <View style={styles.cancelButton}>
                        <CustomButton
                            text="Cancel"
                            onPress={() => onCancel()}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },

    header: {
        backgroundColor: '#1976d2',
        height: 100,
        paddingTop: 20,
        alignItems: 'center',
    },
    addItemText: {
        fontSize: 20,
        marginBottom: 40,
        textAlign: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    content: {
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nextButton: {
        marginRight: 30,
    },
});

export default SellProduct;
