import { StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Colors';
import StreamCard from '../../components/Card/StreamCard';
import MainHeader from '../../components/Header/MainHeader';
import ListHeader from '../../components/Header/ListHeader';

const LiveStreams = () => {
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
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                Notification={true}
                Logo={true}
                source={require('../../assets/image/home.png')}
                Title={true}
                Text="Live Streams"
                Container={{ paddingRight: moderateScale(20) }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListHeader Title="Live Streams" />
                <FlatList
                    scrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={PopularData}
                    renderItem={({ item }) => {
                        return <StreamCard data={item} />;
                    }}
                />
                <ListHeader Title="Pod Cast" />
                <FlatList
                    scrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={PopularData}
                    renderItem={({ item }) => {
                        return <StreamCard data={item} />;
                    }}
                />
                <ListHeader Title="Music Videos" />
                <FlatList
                    scrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={PopularData}
                    renderItem={({ item }) => {
                        return <StreamCard data={item} />;
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

export default LiveStreams;
