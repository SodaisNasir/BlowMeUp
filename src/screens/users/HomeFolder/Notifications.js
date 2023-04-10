import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

import MainHeader from '../../../components/Header/MainHeader';
import {Colors} from '../../../utils/Colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import Feather from 'react-native-vector-icons/Feather';
import {Font} from '../../../utils/font';
const Notifications = ({navigation}) => {
  const DATA = [
    {
      Name: 'Aarush Galloway',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp1.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
    {
      Name: 'Arla Potter',
      Time: '52 min ago',
      About: 'Added a new music',
      source: require('../../../assets/image/dp2.png'),
    },
  ];
  const Item = ({Name, Time, About, source}) => (
    <View style={[styles.Main, styles.Row]}>
      <View style={styles.ImageBox}>
        <Image style={styles.Image} resizeMode="contain" source={source} />
      </View>
      <View style={{marginHorizontal: scale(15)}}>
        <View style={styles.Row}>
          <Text style={styles.Name}>{Name}</Text>
          <Text style={styles.About}>{About}</Text>
        </View>
        <Text style={styles.Time}>{Time}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        Notification={true}
        BackArrow={true}
        Title={true}
        Text="Notifications"
        Container={{paddingRight: moderateScale(20)}}
      />
      <View
        style={{
          marginRight: scale(20),
          marginLeft: scale(5),
          marginBottom: scale(80),
        }}>
        <SwipeListView
          data={DATA}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}
          renderItem={({item}) => (
            <Item
              Name={item.Name}
              Time={item.Time}
              About={item.About}
              source={item.source}
            />
          )}
          renderHiddenItem={() => (
            <View style={styles.rowBack}>
              <LinearGradient
                colors={['#FF6B00', '#CD2828']}
                style={{borderRadius: scale(10)}}>
                <TouchableOpacity
                  style={styles.IconBox}
                  onPress={() => navigation.navigate('Manage')}>
                  <Feather name="check" size={scale(22)} color={Colors.White} />
                  <Text style={styles.Read}>Read</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
          swipeDirection={'right'}
          disableRightSwipe={true}
          leftOpenValue={0}
          rightOpenValue={scale(-90)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ThemeBlue,
    paddingLeft: moderateScale(12),
  },
  Main: {
    paddingHorizontal: moderateScale(10),
    height: scale(80),
    backgroundColor: '#fff',
    marginBottom: verticalScale(20),
    borderRadius: scale(10),
  },
  rowBack: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  IconBox: {
    width: scale(80),
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageBox: {
    width: scale(45),
    height: scale(45),
  },
  Name: {
    fontFamily: Font.Poppins500,
    fontSize: scale(12),
    color: '#1A1B23',
  },
  About: {
    fontFamily: Font.Poppins400,
    fontSize: scale(12),
    color: '#676767',
    marginLeft: scale(5),
  },
  Time: {
    fontFamily: Font.Poppins400,
    fontSize: scale(11),
    color: '#919191',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  Read: {
    fontFamily: Font.Poppins400,
    fontSize: scale(11),
    color: Colors.White,
  },
});

export default Notifications;
