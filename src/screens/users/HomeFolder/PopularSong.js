import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import MainHeader from '../../../components/Header/MainHeader';
import {Font} from '../../../utils/font';
import SongsItem from '../../../components/Card/SongsItem';

const PopularSong = () => {
  const params = [
    {
      id: '1',
      name: 'All',
      selected: true,
    },
    {
      id: '2',
      name: 'Song',
      selected: false,
    },
    {
      id: '3',
      name: 'Playlist',
      selected: false,
    },
    {
      id: '4',
      name: 'Artist',
      selected: false,
    },
    {
      id: '5',
      name: 'Podcast',
      selected: false,
    },
    {
      id: '6',
      name: 'Videos',
      selected: false,
    },
  ];
  const SongData = [
    {
      SongName: 'Cold',
      Playlist: 'Playlist',
      Name: 'Zarror',
      source: require('../../../assets/image/songitem1.png'),
    },
    {
      SongName: 'Podcastery Jurnalisa',
      Playlist: 'Podcast',
      Name: 'Jurnalisa',
      source: require('../../../assets/image/songitem2.png'),
    },
    {
      SongName: 'If the World Was Ending',
      Playlist: 'Album',
      Name: 'JP Saxe',
      source: require('../../../assets/image/songitem3.png'),
    },
    {
      SongName: 'Easy On Me',
      Playlist: 'Single',
      Name: 'Adele',
      source: require('../../../assets/image/songitem4.png'),
    },
    {
      SongName: 'Rap Me',
      Playlist: 'Playlist',
      Name: 'John',
      source: require('../../../assets/image/songitem5.png'),
    },
    {
      SongName: 'Yellow',
      Playlist: 'Singer',
      Name: 'Coldplay',
      source: require('../../../assets/image/songitem6.png'),
    },
    {
      SongName: 'Best Song Ever',
      Playlist: 'Album',
      Name: 'One Direction',
      source: require('../../../assets/image/songitem7.png'),
    },
  ];
  const [data, setData] = useState(params);

  const handleChange = value => {
    const newitem = data.map(val => {
      if (val.id === value.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setData(newitem);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.bubbleBox,
        {
          backgroundColor: item.selected ? Colors.Main : Colors.White,
        },
      ]}
      activeOpacity={0.9}
      onPress={() => handleChange(item)}>
      <Text
        style={[
          styles.bubbles,
          {
            fontSize: scale(14),
            color: item.selected ? Colors.White : Colors.Black,
          },
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        Notification={true}
        BackArrow={true}
        Title={true}
        Text="Popular Song"
        Container={{paddingRight: moderateScale(20)}}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={SongData}
        renderItem={({item}) => {
          return <SongsItem data={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ThemeBlue,
    paddingLeft: moderateScale(12),
  },
  bubbleBox: {
    // flexWrap: 'wrap',
    borderRadius: scale(8),
    marginHorizontal: scale(5),
    paddingHorizontal: moderateScale(16),
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  bubbles: {
    color: Colors.Black,
    textTransform: 'capitalize',
    fontFamily: Font.Inter400,
    fontSize: scale(14),
  },
});

export default PopularSong;
