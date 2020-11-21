import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";


const TabBarComponent = ({icon, title, navigationProps}) => {

    const navigate = () => {
        navigationProps.navigate(title);
    };

    return (
        <View>
            <TouchableOpacity onPress={navigate}>
                <FontAwesomeIcon icon={icon} size={20} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {position: 'relative', top: 2}
});

export default TabBarComponent;
