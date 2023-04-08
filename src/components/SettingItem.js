import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/font';
import { moderateScale, scale } from 'react-native-size-matters';

const SettingItem = props => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Profile</Text>
            <View style={StyleSheet.Row}>
                {props.Notificatin ? <View></View> : null}
                <View style={styles.ImageBox}>
                    <Image
                        style={styles.Image}
                        source={require('../assets/image/right.png')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: scale(12),
    },
    Text: {
        color: Colors.White,
        fontFamily: Font.Poppins500,
        fontSize: scale(15),
    },
    ImageBox: {
        backgroundColor: Colors.White,
        height: scale(30),
        width: scale(30),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        height: scale(15),
        width: scale(15),
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default SettingItem;
