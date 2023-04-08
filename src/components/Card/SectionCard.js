import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../utils/Colors';
import {
    moderateVerticalScale,
    scale,
    verticalScale,
} from 'react-native-size-matters';
import { Font } from '../../utils/font';

const SectionCard = props => {
    const [image, setImage] = useState(
        require('../../assets/image/heartOutline.png'),
    ); // default image

    const onPressHandler = () => {
        if (image === require('../../assets/image/heartOutline.png')) {
            setImage(require('../../assets/image/heart.png')); // change to image2
        } else {
            setImage(require('../../assets/image/heartOutline.png')); // change back to image1
        }
    };
    return (
        <View style={styles.Container}>
            <View style={styles.Row}>
                <Image style={styles.Dp} source={props.Avatar} />
                <View style={styles.Active} />
                <View>
                    <Text style={styles.Name}>{props.Name}</Text>
                    <Text style={styles.Time}>{props.Time}</Text>
                </View>
            </View>
            <Image resizeMode="contain" style={styles.Image} source={props.source} />
            <Text style={styles.Text}>{props.LongText}</Text>
            <View style={styles.Row}>
                <TouchableOpacity onPress={onPressHandler}>
                    <Image style={styles.heartImage} source={image} />
                </TouchableOpacity>
                <Text styles={styles.Number}>{props.Number}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        marginTop: verticalScale(30),
        borderBottomWidth: 1,
        borderBottomColor: Colors.Grey,
        paddingVertical: moderateVerticalScale(20),
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Active: {
        backgroundColor: Colors.Green,
        borderRadius: 100,
        height: scale(15),
        width: scale(15),
        borderWidth: 1,
        borderColor: Colors.White,
        marginLeft: scale(-10),
        marginRight: scale(20),
        alignSelf: 'flex-end',
    },
    Name: {
        color: Colors.White,
        fontFamily: Font.Poppins500,
        fontSize: scale(15),
    },
    Time: {
        color: Colors.Grey,
        fontFamily: Font.Poppins400,
        fontSize: scale(12),
    },
    Image: {
        width: '95%',
        // height: '100%',
        alignSelf: 'center',
        marginTop: verticalScale(20),
    },

    Text: {
        fontSize: scale(12),
        fontFamily: Font.Poppins400,
        color: Colors.White,
        marginVertical: verticalScale(15),
    },
    heartImage: {
        width: scale(22),
        height: scale(22),
        marginRight: scale(8),
    },
    Number: {
        fontFamily: Font.Poppins400,
        fontSize: scale(12),
        color: Colors.White,
    },
    Dp: {
        width: scale(40),
        height: scale(40),
    },
});

export default SectionCard;
