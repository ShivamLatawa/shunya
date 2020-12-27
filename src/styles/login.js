import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const loginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    newAccountText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold',
    },

    signUp: {
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

export default loginScreenStyles;
