import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors';
import {Font} from '../../utils/font';
const MainHeader = props => {
  return (
    <View style={[styles.Container, props.Container]}>
      <View style={{flexDirection: 'row'}}>
        {props.Logo ? <Image source={props.source} /> : null}
        {props.BackArrow ? (
          <View style={styles.arrowBox}>
            <Ionicons name="arrow-back" color="#6586B6" size={scale(18)} />
          </View>
        ) : null}
        {props.Title ? <Text style={styles.Text}>{props.Text}</Text> : null}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Feather name="search" size={scale(20)} color={'white'} />
        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={scale(20)}
          color={'white'}
        />
      </View>
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
    fontSize: scale(20),
    paddingHorizontal: moderateScale(20),
  },
});

export default MainHeader;
