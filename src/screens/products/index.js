import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ActionButton} from 'react-native-material-ui';
import {faPlus, faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {addProductCategory} from '../../services/productService';
import TabBarComponent from '../../shared/TabBarComponent';
import AddProductCategory from './add';

const ProductsScreen = ({navigation}) => {
    const [showAddProductDialog, setShowAddProductDialog] = useState(false);

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

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Shunya</Text>
                </View>
                <View style={styles.addButton}>
                    <ActionButton
                        onPress={() => setShowAddProductDialog(true)}
                        icon="add"
                        style={{container: styles.actionButton}}
                    />
                </View>
                <View style={styles.sellButtonWrapper}>
                    <ActionButton
                        icon="credit-card"
                        onPress={() => onSellProduct()}
                        style={{container: styles.actionButton}}
                    />
                </View>

                {showAddProductDialog && (
                    <View style={styles.productContainer}>
                        {showAddProductDialog && (
                            <AddProductCategory onAddProduct={onAddProduct} />
                        )}
                    </View>
                )}
            </View>
        </>
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
    text: {
        color: Colors.white,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    actionButton: {
        backgroundColor: '#f50057',
    },
    sellButtonWrapper: {
        position: 'relative',
        right: 100,
        top: 100,
    },
    addButton: {
        right: 0,
        top: 100,
    },
    productContainer: {
        left: '15%',
        top: '30%',
    },
});

export default ProductsScreen;
