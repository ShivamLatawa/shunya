import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";


const TabBarComponent = ({icon, title, navigationProps}) => {

    const navigate = () => {
        navigationProps.navigate(title);
    };

    return (
        <View style={styles.tab}>
            <TouchableOpacity onPress={navigate}>
                <FontAwesomeIcon icon={icon} size={20} style={styles.icon}/>
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tab: {
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'relative',
        left: 10
    }
});

export default TabBarComponent;
