import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";


const loginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    newAccountText: {
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
    },

    signUp: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },

    createAccountWrapper: {
        flexDirection: 'row',
    },
});

export default loginScreenStyles;
