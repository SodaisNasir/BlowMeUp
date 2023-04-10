import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainHeader from '../../../components/Header/MainHeader';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
const PlayAll = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        Notification={true}
        BackArrow={true}
        Container={{paddingRight: moderateScale(20)}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.FirstBox}>
          <View style={styles.ImageBox}>
            <Image
              style={styles.Image}
              resizeMode="cover"
              source={require('../../../assets/image/artist2.jpg')}
            />
          </View>
          <Text style={styles.Name}>Marcus Morgan</Text>
          <View style={styles.Row}>
            <CustomButton
              title="Play All"
              Play={true}
              containerStyle={styles.containerStyle}
              textStyle={styles.textStyle}
            />
            <View style={styles.IconBox}>
              <Ionicons
                name="md-shuffle"
                color={Colors.ThemePurple}
                size={scale(30)}
              />
            </View>
          </View>
        </View>
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
  FirstBox: {
    marginHorizontal: scale(20),
    alignItems: 'center',
  },
  Image: {width: '100%', height: '100%', borderRadius: scale(20)},
  ImageBox: {width: W * 0.9, height: H * 0.3},
  Name: {
    fontFamily: Font.Inter700,
    fontSize: scale(25),
    textAlign: 'center',
    color: Colors.White,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: Colors.ThemePurple,
    borderWidth: null,
    width: '75%',
  },
  textStyle: {
    color: Colors.White,
    fontFamily: Font.Inter500,
  },
  IconBox: {
    // backgroundColor: '#fff',
    width: scale(50),
    aspectRatio: 1 / 1,
    borderWidth: scale(1),
    borderColor: Colors.ThemePurple,
    borderRadius: 100,
    marginLeft: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PlayAll;
