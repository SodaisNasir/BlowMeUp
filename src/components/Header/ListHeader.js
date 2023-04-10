import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../utils/Colors';
const ListHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.Row}>
        {props.Logo ? (
          <Image style={styles.Image} source={props.source} />
        ) : null}
        <Text style={[styles.Title, props.TitleRestyle]}>{props.Title}</Text>
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.Row, styles.MoreBox]}>
        <Text style={styles.Text}>More</Text>
        <AntDesign name="rightcircleo" color={Colors.Black} size={scale(15)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateVerticalScale(20),
    paddingRight: moderateScale(20),
  },
  Row: {flexDirection: 'row', alignItems: 'center'},
  Image: {
    width: scale(22),
    height: verticalScale(22),
    marginRight: scale(10),
  },
  Title: {
    fontSize: scale(15),
    fontFamily: Font.Poppins600,
    color: Colors.White,
  },
  Text: {
    color: Colors.Black,
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    marginRight: scale(7),
  },
  MoreBox: {
    backgroundColor: Colors.White,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(5),
    borderRadius: scale(20),
  },
});

export default ListHeader;
