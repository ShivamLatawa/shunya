import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {SplashScreen} from '../splash';
import AddProductNavigator from './productNavigator';

const RootNavigator = createSwitchNavigator(
    {
        SplashScreen: {
            screen: SplashScreen,
        },
        Auth: {
            screen: AuthNavigator,
        },
        App: AppNavigator,
        Add: AddProductNavigator
    },
    {
        initialRouteName: 'SplashScreen',
    },
);

export default createAppContainer(RootNavigator);
