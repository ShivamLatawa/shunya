import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderRadius: 50,
        borderWidth: 1,
        marginBottom: 30,
        paddingLeft: 15
    },

    dateInput: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderRadius: 50,
        borderWidth: 1,
        marginBottom: 30,
        paddingLeft: 15,
        flexDirection: 'row',
    },

    picker: {
        width: 160,
        position: 'relative',
        bottom: 7,
        right: 5,
    },

});

export default styles;
