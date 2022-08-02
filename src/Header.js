import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>React Native Exercise</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default Header;