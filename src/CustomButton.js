import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native';

const MyButtom = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            style={
                ({ pressed }) => [styles.button,
                { backgroundColor: pressed ? 'grey' : props.color },
                {...props.style}
                ]
            }
            hitSlop={{ top: 10, bottom: 15 }}
        >
            <Text style={[styles.text, {...props.text_style}]}>
                {props.title}
            </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'green',
        fontSize: 25,
        fontStyle: 'italic',
        margin: 10,
    },
    button: {
        width: 150, height: 50,
        backgroundColor: 'yellow',
        alignItems: 'center',
    },
});

export default MyButtom;