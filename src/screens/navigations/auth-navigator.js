import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from "../auth/login";
import RegisterScreen from "../auth/register";


const AuthNavigatorConfig = {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
