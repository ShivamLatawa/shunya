import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getProductDetails} from '../../services/productService';
import CustomButton from '../../shared/CustomButton';
import Product from './product';

const ProductsScreen = ({navigation}) => {
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        getProductDetails().then((result) => setProductDetails(result));
    }, []);

    const onAdd = () => {
        navigation.navigate('Add');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Shunya</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.addButton}>
                    <CustomButton text="Add" onPress={() => onAdd()} />
                </View>

                <ScrollView>
                    {productDetails.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                product={product}></Product>
                        );
                    })}
                </ScrollView>
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
        height: 150,
        paddingTop: 30,
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    addButton: {
        alignItems: 'flex-end',
    },
    content: {
        padding: 20,
    },
});

export default ProductsScreen;
