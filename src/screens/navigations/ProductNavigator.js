import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SellProduct from '../farmer/products/sell';
import EditProduct from '../farmer/products/edit';
import ProductSuccess from '../farmer/products/success';

const Stack = createStackNavigator();

const AddProductNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Sell" component={SellProduct} />
            <Stack.Screen name="Edit" component={EditProduct} />
            <Stack.Screen name="Success" component={ProductSuccess} />
        </Stack.Navigator>
    );
};

export default AddProductNavigator;
