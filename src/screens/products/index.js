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
                        style={{container: styles.actionButton}}
                        icon={<TabBarComponent icon={faPlus} title="Add" />}
                    />
                </View>
                <View style={styles.sellButtonWrapper}>
                    <ActionButton
                        style={{container: styles.actionButton}}
                        icon={
                            <TabBarComponent icon={faRupeeSign} title="Sell" />
                        }
                        onPress={() => onSellProduct()}
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
        backgroundColor: Colors.black,
        height: 150,
        paddingTop: 45,
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    actionButton: {
        backgroundColor: '#67baf6',
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
        top: '25%',
    },
});

export default ProductsScreen;
