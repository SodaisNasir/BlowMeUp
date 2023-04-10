import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {Font} from '../utils/font';
import {Colors} from '../utils/Colors';
const CustomButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[styles.containerStyle, props.containerStyle]}>
      {props.Play ? (
        <Entypo
          style={{paddingHorizontal: 5}}
          name="controller-play"
          color={Colors.White}
          size={20}
        />
      ) : null}
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
    borderColor: Colors.Yellow,
    flexDirection: 'row',
  },

  font: {
    color: Colors.ThemeBlue,
    fontSize: scale(15),
    textTransform: 'capitalize',
    fontFamily: Font.Poppins500,
    top: 1.5,
  },
});
