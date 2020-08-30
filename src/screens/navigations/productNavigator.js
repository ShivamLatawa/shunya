import {createStackNavigator} from 'react-navigation-stack';

import AddProduct from '../products/add';
import EditProduct from '../products/edit';
import ProductSuccess from '../products/success';

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
};

const AddProductNavigator = createStackNavigator(
    RouteConfigs,
    AddProductNavigatorConfig,
);

export default AddProductNavigator;
