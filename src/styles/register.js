import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";


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
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
    },

    login: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },

    createAccountWrapper: {
        flexDirection: 'row',
        marginTop: 20,
    }
});

export default registerScreenStyles;
