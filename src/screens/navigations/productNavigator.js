import {createStackNavigator} from 'react-navigation-stack';

import AddProduct from '../products/sell';
import EditProduct from '../products/edit';
import ProductSuccess from '../products/success';
import ProductsScreen from '../products';

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
    Success: {
        screen: ProductSuccess,
    },
    Products: {
        screen: ProductsScreen,
    },
};

const AddProductNavigator = createStackNavigator(
    RouteConfigs,
    AddProductNavigatorConfig,
);

export default AddProductNavigator;
