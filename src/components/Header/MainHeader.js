import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import {useNavigation} from '@react-navigation/native';
const MainHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.Container, props.Container]}>
      <View style={{flexDirection: 'row'}}>
        {props.Logo ? (
          <Image style={styles.Image} source={props.source} />
        ) : null}
        {props.BackArrow ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrowBox}>
            <Ionicons name="arrow-back" color={Colors.Main} size={scale(18)} />
          </TouchableOpacity>
        ) : null}
        {props.Search ? (
          <Feather name="search" color={Colors.Main} size={scale(20)} />
        ) : null}
        {props.Title ? (
          <Text style={[styles.Text, props.TextRestyle]}>{props.Text}</Text>
        ) : null}
      </View>

      {props.Notification ? (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Feather
              style={{marginHorizontal: scale(10)}}
              name="search"
              size={scale(20)}
              color={Colors.White}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={scale(22)}
              color={Colors.White}
            />
          </TouchableOpacity>
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
    borderColor: Colors.Main,
  },
  Text: {
    fontFamily: Font.Gilroy700,
    fontSize: scale(17),
    paddingHorizontal: moderateScale(15),
    color: Colors.White,
    textAlignVertical: 'center',
  },
  Image: {
    width: scale(30),
    height: scale(30),
  },
});

export default MainHeader;
