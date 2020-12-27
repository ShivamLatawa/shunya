import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomTextInput from '../../../shared/CustomTextInput';
import {Button, Dialog, Portal} from 'react-native-paper';

const AddProductCategory = ({onAddProduct, showAddProductDialog}) => {
    const [product, setProduct] = useState('');
    const [productCategory, setProductCategory] = useState();

    return (
        <View>
            <Portal>
                <Dialog visible={showAddProductDialog}>
                    <Dialog.Title>Add New Product</Dialog.Title>
                    <Dialog.Content>
                        <CustomTextInput
                            value={product}
                            style={{marginBottom: 20}}
                            placeholder="Product"
                            onChange={(value) => setProduct(value)}
                        />
                        <View>
                            <Picker
                                selectedValue={productCategory}
                                mode="dropdown"
                                onValueChange={(value) =>
                                    setProductCategory(value)
                                }>
                                <Picker.Item label="Select Category" value="" />
                                <Picker.Item label="Fruits" value="fruits" />
                                <Picker.Item
                                    label="Vegetables"
                                    value="vegetables"
                                />
                                <Picker.Item label="Cereals" value="cereals" />
                                <Picker.Item label="Pulses" value="pulses" />
                            </Picker>
                        </View>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={() =>
                                onAddProduct('cancel', product, productCategory)
                            }>
                            Cancel
                        </Button>
                        <Button
                            onPress={() =>
                                onAddProduct('ok', product, productCategory)
                            }>
                            Ok
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AddProductCategory;
