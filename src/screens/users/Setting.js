import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
import React from 'react';

import MainHeader from '../../components/Header/MainHeader';
import SettingItem from '../../components/SettingItem';
import CustomButton from '../../components/CustomButton';

import { Colors } from '../../utils/Colors';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Setting = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                Notification={true}
                Logo={true}
                source={require('../../assets/image/settings.png')}
                Title={true}
                Text="Setting"
                Container={{ paddingRight: moderateScale(20) }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SettingItem Title='Profile' />
                <SettingItem Title='Notification' Notificatin={true} />
                <SettingItem Title='Manage Podcast/Music Videos' />
                <SettingItem Title='Start live streaming' />
                <SettingItem Title='Terms and conditions' />
                <SettingItem Title='Privacy Policy' />
                <SettingItem Title='Leaderboard' />
                <SettingItem Title='Change Password' />
                <CustomButton title='Log Out' containerStyle={{ marginTop: verticalScale(25) }} />
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
});

export default Setting;
