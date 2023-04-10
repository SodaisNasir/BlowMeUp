import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
const SongsItem = ({data}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.Container}>
      <View style={styles.Row}>
        <View style={styles.ImageBox}>
          <Image
            style={styles.Image}
            resizeMode="contain"
            source={data.source}
          />
        </View>
        <View style={{marginHorizontal: scale(10)}}>
          <Text style={styles.TextOne} numberOfLines={1}>
            {data.SongName}
          </Text>
          <View
            style={[
              styles.Row,
              {
                alignSelf: 'flex-start',
              },
            ]}>
            <Text style={styles.TextTwo}>{data.Playlist}</Text>
            <Text style={styles.TextTwo}> · </Text>
            <Text style={styles.TextTwo}>{data.Name}</Text>
          </View>
        </View>
      </View>

      <Entypo name="chevron-right" color={Colors.Yellow} size={scale(20)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: scale(25),
    marginBottom: 15,
  },
  ImageBox: {
    width: scale(70),
    height: scale(70),
  },
  Image: {width: '100%', height: '100%'},
  Row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextOne: {
    fontSize: scale(16),
    fontFamily: Font.Inter700,
    color: Colors.White,
  },
  TextTwo: {
    fontSize: scale(14),
    fontFamily: Font.Inter400,
    color: Colors.Main,
  },
});

export default SongsItem;
