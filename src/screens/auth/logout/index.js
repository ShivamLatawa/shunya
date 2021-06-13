import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const Logout = () => {
    useEffect(() => {
        const triggerLogout = async () => {
            AsyncStorage.getAllKeys()
                .then((keys) => AsyncStorage.multiRemove(keys))
                .then(() => {
                    alert(
                        'Logout Successful! Please close the app and login again',
                    );
                });
        };

        triggerLogout();
    }, []);

    return <></>;
};

export default Logout;
