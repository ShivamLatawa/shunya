import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FAB} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {addProductCategory} from '../../services/productService';
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
                    <FAB
                        onPress={() => setShowAddProductDialog(true)}
                        icon="pencil-plus"
                        style={styles.actionButton}
                    />
                </View>
                <View style={styles.sellButtonWrapper}>
                    <FAB
                        icon="currency-inr"
                        onPress={() => onSellProduct()}
                        style={styles.actionButton}
                    />
                </View>
                <AddProductCategory
                    showAddProductDialog={showAddProductDialog}
                    onAddProduct={onAddProduct}
                />
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
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
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
});

export default ProductsScreen;
