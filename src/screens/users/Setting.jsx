import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

import MainHeader from '../../components/Header/MainHeader';
import SettingItem from '../../components/SettingItem.jsx';
import {Colors} from '../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';

const Setting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        Notification={true}
        Logo={true}
        source={require('../../assets/image/home.png')}
        Title={true}
        Text="Setting"
        Container={{paddingRight: moderateScale(20)}}
      />
      <SettingItem />
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
