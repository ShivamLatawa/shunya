import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Picker} from '@react-native-community/picker';
import {
    faListAlt,
    faRupeeSign,
    faWeight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {CustomTextInput} from '../../../shared/CustomTextInput';
import {CustomButton} from '../../../shared/CustomButton';
import {getProductCategories} from '../../../services/productService';

import inputStyles from '../../../styles/input';
import iconStyles from '../../../styles/icon';

export const SellProduct = ({navigation}) => {
    const [item, setItem] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        getProductCategories().then((result) => setProductCategories(result));
    }, []);

    const onNext = () => {
        const product = {
            item,
            quantity,
            price,
            id: productCategories.find((product) => product.name === item).id,
        };
        navigation.navigate('Edit', {product});
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Upload Items</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.addItem}>
                    <Text style={styles.addItemText}>Add an Item here</Text>
                </View>
                <View style={inputStyles.input}>
                    <FontAwesomeIcon
                        icon={faListAlt}
                        size={20}
                        style={iconStyles.icon}
                    />
                    <Picker
                        selectedValue={item}
                        style={inputStyles.picker}
                        onValueChange={(value) => setItem(value)}>
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
                        icon={faRupeeSign}
                        placeholder="Price/Kg in INR"
                        keyboardType="numeric"
                        onChange={(value) => setPrice(value)}
                    />
                </View>

                <View>
                    <CustomTextInput
                        icon={faWeight}
                        placeholder="Quantity in Kg"
                        keyboardType="numeric"
                        onChange={(value) => setQuantity(value)}
                    />
                </View>

                <View style={styles.createAccountWrapper}>
                    <View style={styles.nextButton}>
                        <CustomButton text="Next" onPress={() => onNext()} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },

    header: {
        backgroundColor: Colors.black,
        height: 60,
        paddingTop: 15,
        alignItems: 'center',
    },
    addItemText: {
        fontSize: 20,
        marginBottom: 30,
    },
    text: {
        color: Colors.white,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    nextButton: {
        alignItems: 'center',
    },
});

export default SellProduct;
