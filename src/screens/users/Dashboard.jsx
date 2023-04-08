import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, FlatList} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

import {Colors} from '../../utils/Colors';

import MainHeader from '../../components/Header/MainHeader';
import ListHeader from '../../components/Header/ListHeader';
import SongCard from '../../components/Card/SongCard';
import GernCard from '../../components/Card/GernCard';
import {Font} from '../../utils/font';

const Dashboard = () => {
  const PopularData = [
    {
      Song: 'Ghost',
      Singer: 'Justin Bieber',
      source: require('../../assets/image/song1.png'),
    },
    {
      Song: 'Shivers',
      Singer: 'Ed Sheeran',
      source: require('../../assets/image/song2.png'),
    },
    {
      Song: 'Happier',
      Singer: 'Olivia Radrigo',
      source: require('../../assets/image/song3.png'),
    },
  ];
  const GenreData = [
    {
      Genre: 'Genre',
      pop: 'Pop',
      lastGernText: 'Pop',
      source: require('../../assets/image/gradiant1.png'),
    },
    {
      Genre: 'Genre',
      pop: 'Kpop',
      lastGernText: 'Kpop',
      source: require('../../assets/image/gradiant2.png'),
    },
    {
      Genre: 'Genre',
      pop: 'Country',
      lastGernText: 'Country',
      source: require('../../assets/image/gradiant3.png'),
    },
  ];
  const RecentData = [
    {
      Song: 'Ghost',
      Singer: 'Justin Bieber',
      source: require('../../assets/image/Recent1.png'),
    },
    {
      Song: 'Shivers',
      Singer: 'Ed Sheeran',
      source: require('../../assets/image/Recent2.png'),
    },
    {
      Song: 'Happier',
      Singer: 'Olivia Radrigo',
      source: require('../../assets/image/Recent3.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        Notification={true}
        Logo={true}
        source={require('../../assets/image/home.png')}
        Title={true}
        Text="Dashboard"
        Container={{paddingRight: moderateScale(20)}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListHeader
          Logo={true}
          source={require('../../assets/image/fire.png')}
          Title="Popular Song"
        />
        <FlatList
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={PopularData}
          renderItem={({item}) => {
            return <SongCard data={item} />;
          }}
        />
        <ListHeader Title="By Genre" />
        <FlatList
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={GenreData}
          renderItem={({item}) => {
            return <GernCard data={item} />;
          }}
        />
        <ListHeader Title="Recent" />
        <FlatList
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={RecentData}
          renderItem={({item}) => {
            return <SongCard data={item} />;
          }}
        />
        <ListHeader
          Title="Artists"
          TitleRestyle={{
            fontSize: scale(20),
            fontFamily: Font.Roboto700,
            color: Colors.White,
          }}
        />
        <FlatList
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={RecentData}
          renderItem={({item}) => {
            return <SongCard data={item} />;
          }}
        />
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

export default Dashboard;
