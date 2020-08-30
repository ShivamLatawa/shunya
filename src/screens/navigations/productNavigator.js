import {createStackNavigator} from 'react-navigation-stack';

import AddProduct from '../products/addProduct';
import EditProduct from '../products/editProduct';

const AddProductNavigatorConfig = {
    initialRouteName: 'Add',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Add: {
        screen: AddProduct,
    },
    Edit: {
        screen: EditProduct,
    },
};

const AddProductNavigator = createStackNavigator(
    RouteConfigs,
    AddProductNavigatorConfig,
);

export default AddProductNavigator;
