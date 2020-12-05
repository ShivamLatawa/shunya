import { faListAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Picker } from '@react-native-community/picker';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';
import CustomTextInput from '../../../shared/CustomTextInput';
import inputStyles from "../../../styles/input";
import iconStyles from "../../../styles/icon";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const AddProductCategory = ({onAddProduct}) => {
    const [product, setProduct] = useState("");
    const [productCategory, setProductCategory] = useState("Fruits");

    return (
            <Dialog style={styles.container}>
                <Dialog.Title><Text>Add New Product</Text></Dialog.Title>
                <Dialog.Content style={styles.content}>
                    <CustomTextInput
                        icon={faPlusCircle}
                        placeholder="Enter product name..."
                        onChange={(value) => setProduct(value)}
                    />
                    <View style={inputStyles.input}>
                        <FontAwesomeIcon
                            icon={faListAlt}
                            size={20}
                            style={iconStyles.icon}
                        />
                        <Picker
                            selectedValue={productCategory}
                            style={inputStyles.picker}
                            onValueChange={(value) => setProductCategory(value)}>
                            <Picker.Item label="Fruits" value="fruits" />
                            <Picker.Item label="Vegetables" value="vegetables" />
                            <Picker.Item label="Cereals" value="cereals" />
                            <Picker.Item label="Pulses" value="pulses" />
                        </Picker>
                    </View>
                </Dialog.Content>
                <Dialog.Actions>
                    <DialogDefaultActions
                        actions={['cancel', 'ok']}
                        onActionPress={(action) => onAddProduct(action, product, productCategory)}
                    />
                </Dialog.Actions>
            </Dialog>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
});


export default AddProductCategory;