import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    scale,
    moderateScale,
    moderateVerticalScale,
    verticalScale,
} from 'react-native-size-matters';
import { Font } from '../utils/font';
import { Colors } from '../utils/Colors';
const CustomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[
            styles.containerStyle,
            props.containerStyle,
        ]}>
            <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    containerStyle: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(10),
        marginTop: verticalScale(5),
        alignSelf: 'center',
        backgroundColor: '#CED9F8',
        height: verticalScale(52),
        borderWidth: scale(1),
        borderColor: Colors.Yellow
    },

    font: {
        color: Colors.ThemeBlue,
        fontSize: scale(15),
        textTransform: 'uppercase',
        fontFamily: Font.Poppins500,
        top: 1.5
    },
});