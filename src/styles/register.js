import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const registerScreenStyles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    selectWrapper: {
        width: 200,
        borderWidth: 1,
        borderColor: 'gray',
    },

    newAccountText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold',
    },

    login: {
        color: '#6200ee',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 5,
    },

    createAccountWrapper: {
        flexDirection: 'row',
        marginTop: 20,
    },
});

export default registerScreenStyles;
