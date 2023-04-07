import {SafeAreaView, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';
import MainHeader from '../../components/Header/MainHeader';
import {Colors} from '../../utils/Colors';
import ListHeader from '../../components/Header/ListHeader';
import SongCard from '../../components/Card/SongCard';
import {moderateScale} from 'react-native-size-matters';

const Dashboard = () => {
  const PopularData = [
    {
      Song: 'Ghost',
      Singer: 'Justin Bieber',
      source: require('../../assets/image/song1.png'),
    },
    {
      Song: 'Ghost',
      Singer: 'Justin Bieber',
      source: require('../../assets/image/song1.png'),
    },
    {
      Song: 'Ghost',
      Singer: 'Justin Bieber',
      source: require('../../assets/image/song1.png'),
    },
    {
      Song: 'Ghost',
      Singer: 'Justin Bieber',
      source: require('../../assets/image/song1.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        Logo={true}
        // source={require('../../assets/image/')}
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
