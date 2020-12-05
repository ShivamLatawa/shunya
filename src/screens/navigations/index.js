import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {SplashScreen} from '../splash';
import SellProductNavigator from './productNavigator';

const RootNavigator = createSwitchNavigator(
    {
        SplashScreen: {
            screen: SplashScreen,
        },
        Auth: {
            screen: AuthNavigator,
        },
        App: AppNavigator,
        Sell: SellProductNavigator,
    },
    {
        initialRouteName: 'SplashScreen',
    },
);

export default createAppContainer(RootNavigator);
