import React from "react";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {faHome, faShoppingCart, faBookmark, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

import HomeScreen from "../home";
import OrdersScreen from "../orders";
import ProductsScreen from "../products";
import SupportScreen from "../support";
import TabBarComponent from "../../shared/TabBarComponent";


const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarButtonComponent: () => <TabBarComponent icon={faHome} title='Home' navigationProps={navigation}/>,
        })
    },
    Orders: {
        screen: OrdersScreen,
        navigationOptions: ({navigation}) => ({
            tabBarButtonComponent: () => <TabBarComponent icon={faShoppingCart} title='Orders' navigationProps={navigation}/>,
        })
    },
    Products: {
        screen: ProductsScreen,
        navigationOptions: ({navigation}) => ({
            tabBarButtonComponent: () => <TabBarComponent icon={faBookmark} title='Products' navigationProps={navigation}/>
        })
    },
    Support: {
        screen: SupportScreen,
        navigationOptions: ({navigation}) => ({
            tabBarButtonComponent: () => <TabBarComponent icon={faExclamationCircle} title='Support' navigationProps={navigation}/>
        })
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
