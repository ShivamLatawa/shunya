import {createStackNavigator} from 'react-navigation-stack';

import SellProduct from '../products/sell';
import EditProduct from '../products/edit';
import ProductSuccess from '../products/success';
import ProductsScreen from '../products';

const SellProductNavigatorConfig = {
    initialRouteName: 'Sell',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Sell: {
        screen: SellProduct,
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
    SellProductNavigatorConfig,
);

export default AddProductNavigator;
