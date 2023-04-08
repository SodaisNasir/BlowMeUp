import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
} from 'react-native';
import React from 'react';
import MainHeader from '../../components/Header/MainHeader';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Colors';
import { Font } from '../../utils/font';
import SectionCard from '../../components/Card/SectionCard';

const VlogSection = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                Notification={true}
                Logo={true}
                source={require('../../assets/image/home.png')}
                Title={true}
                Text="Vlog Section"
                Container={{ paddingRight: moderateScale(20) }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Row}>
                    <Image
                        style={styles.Image}
                        source={require('../../assets/image/avatar.png')}
                    />
                    <View style={styles.TextInputBox}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="What’s on your mind?"
                            placeholderTextColor={Colors.placeholderTextColor}
                        />
                    </View>
                    <Image
                        style={styles.Image}
                        source={require('../../assets/image/picture.png')}
                    />
                </View>
                <SectionCard
                    Name="Olivia Mā Ddy"
                    Time="52 minute ago"
                    source={require('../../assets/image/section1.png')}
                    LongText="One good thing about music, when it hits you, you feel no pain. ❤️"
                    Number="36"
                    Avatar={require('../../assets/image/dp1.png')}
                />
                <SectionCard
                    Name="Prisha Mclaughlin"
                    Time="52 minute ago"
                    source={require('../../assets/image/section2.png')}
                    LongText="One good thing about music, when it hits you, you feel no pain. ❤️"
                    Number="36"
                    Avatar={require('../../assets/image/dp2.png')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ThemeBlue,
        paddingLeft: moderateScale(12),
    },

    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextInputBox: {
        borderWidth: scale(1),
        borderColor: Colors.White,
        borderRadius: scale(20),
        paddingHorizontal: moderateScale(20),
        height: verticalScale(40),
        width: '70%',
        marginHorizontal: scale(5),
    },
    TextInput: {
        color: Colors.White,
        fontFamily: Font.Gilroy500,
        fontSize: scale(16),
    },
    Image: {
        width: scale(40),
        height: scale(40),
    },
});

export default VlogSection;
