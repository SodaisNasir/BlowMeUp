import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';
import { Font } from '../../utils/font';
const MainHeader = props => {
    return (
        <View style={[styles.Container, props.Container]}>
            <View style={{ flexDirection: 'row' }}>
                {props.Logo ? (
                    <Image style={styles.Image} source={props.source} />
                ) : null}
                {props.BackArrow ? (
                    <View style={styles.arrowBox}>
                        <Ionicons name="arrow-back" color="#6586B6" size={scale(18)} />
                    </View>
                ) : null}
                {props.Title ? <Text style={styles.Text}>{props.Text}</Text> : null}
            </View>

            {props.Notification ? (
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={[styles.Image2, { marginHorizontal: scale(5) }]}
                        source={require('../../assets/image/search.png')}
                    />
                    <Image
                        style={styles.Image2}
                        source={require('../../assets/image/bell.png')}
                    />
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: moderateScale(30),
    },
    arrowBox: {
        borderWidth: scale(1),
        borderRadius: scale(5),
        borderColor: '#6586B6',
    },
    Text: {
        fontFamily: Font.Gilroy700,
        fontSize: scale(17),
        paddingHorizontal: moderateScale(10),
        color: Colors.White,
    },
    Image: {
        width: scale(30),
        height: scale(30),
    },
    Image2: {
        width: scale(22),
        height: scale(22),
    },
});

export default MainHeader;
