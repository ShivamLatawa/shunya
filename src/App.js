/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import RootNavigator from './screens/navigations';

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
