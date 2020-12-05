import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {ActionButton} from 'react-native-material-ui';
import {faPlus, faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
    getProductDetails,
    getProductCategories,
    addProductCategory,
} from '../../services/productService';
import TabBarComponent from '../../shared/TabBarComponent';
import Product from './product';
import AddProductCategory from './add';

const ProductsScreen = ({navigation}) => {
    const [productDetails, setProductDetails] = useState([]);
    const [showAddProductDialog, setShowAddProductDialog] = useState(false);
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        getProductDetails().then((result) => setProductDetails(result));
    }, []);

    useEffect(() => {
        getProductCategories().then((result) => setProductCategories(result));
    }, []);

    const onSellProduct = () => {
        navigation.navigate('Sell');
    };

    const onAddProduct = (action, product, productCategory) => {
        if (action === 'cancel') {
            setShowAddProductDialog(false);
            return;
        }

        if (!productCategory || !product) {
            alert('Please fill the details!');
            return;
        }

        const payload = {
            type: productCategory,
            name: product,
        };

        addProductCategory(payload).then(() => setShowAddProductDialog(false));
    };

    const renderProductDetails = () => {
        return (
            productCategories.length > 0 &&
            productDetails.map((productDetail) => {
                const productCategory = productCategories.find(
                    (category) => productDetail.productId === category.id,
                );

                const product = {
                    id: productDetail.id,
                    quantity: productDetail.quantity,
                    price: productDetail.pricePerUnit,
                    name: productCategory.name,
                };

                return <Product key={product.id} product={product}></Product>;
            })
        );
    };

    return (
        <>
            {showAddProductDialog && (
                <View style={styles.productContainer}>
                    {showAddProductDialog && (
                        <AddProductCategory onAddProduct={onAddProduct} />
                    )}
                </View>
            )}
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Shunya</Text>
                </View>
                <View style={styles.addButton}>
                    <ActionButton
                        onPress={() => setShowAddProductDialog(true)}
                        icon={<TabBarComponent icon={faPlus} title="Add" />}
                    />
                </View>
                <View style={styles.sellButtonWrapper}>
                    <ActionButton
                        icon={
                            <TabBarComponent icon={faRupeeSign} title="Sell" />
                        }
                        onPress={() => onSellProduct()}
                    />
                </View>
                <ScrollView style={styles.content}>
                    <Text style={styles.title}>Products to sell</Text>
                    <ScrollView style={styles.scrollView}>
                        {renderProductDetails()}
                    </ScrollView>
                </ScrollView>
            </View>
        </>
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
    title: {
        color: Colors.dark,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sellButton: {
        backgroundColor: 'green',
    },
    sellButtonWrapper: {
        position: 'relative',
        right: 100,
    },
    addButton: {
        right: 0,
        bottom: 0,
    },
    content: {
        padding: 20,
    },
    productContainer: {
        position: 'absolute',
        left: '15%',
        top: '30%',
        borderColor: '#67baf6',
        borderWidth: 2,
        elevation: 5,
        zIndex: 11,
    },
    scrollView: {
        minHeight: 900,
    },
});

export default ProductsScreen;
