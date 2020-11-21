import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {
    faHome,
    faShoppingCart,
    faBookmark,
    faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import HomeScreen from '../home';
import OrdersScreen from '../orders';
import ProductsScreen from '../products';
import SupportScreen from '../support';
import TabBarComponent from '../../shared/TabBarComponent';

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
    barStyle: { backgroundColor: '#7789f6' },
};

const RouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <TabBarComponent
                    icon={faHome}
                    navigationProps={navigation}
                />
            ),
        }),
        barStyle: { backgroundColor: '#67baf6' },
    },
    Orders: {
        screen: OrdersScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <TabBarComponent
                    icon={faShoppingCart}
                    navigationProps={navigation}
                />
            ),
            barStyle: { backgroundColor: '#cccccc' },  
        }),
    },
    Products: {
        screen: ProductsScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <TabBarComponent
                    icon={faBookmark}
                    navigationProps={navigation}
                />
            ),
            barStyle: { backgroundColor: '#67baf6' },  
        }),
    },
    Support: {
        screen: SupportScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <TabBarComponent
                    icon={faExclamationCircle}
                    navigationProps={navigation}
                />
            ),
            barStyle: { backgroundColor: '#abcdef' },  
        }),
    },
};

const AppNavigator = createMaterialBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
