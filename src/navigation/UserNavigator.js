import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from '../screens/users/Dashboard';
import PictureSection from '../screens/users/PictureSection';
import LiveStreams from '../screens/users/LiveStreams';
import VlogSection from '../screens/users/VlogSection';
import Setting from '../screens/users/Setting';

import Search from '../screens/users/Search.js';


const UserNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home"
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: Colors.ThemeGrey,
                        height: verticalScale(55),
                        borderTopColor: Colors.ThemeGrey,
                    },
                }}>
                <Tab.Screen
                    name="dashboard"
                    component={AllDashboard}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/home.png')}
                                />
                            ) : (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/homedeactive.png')}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="AllPic"
                    component={AllPic}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/photo.png')}
                                />
                            ) : (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/photodeactive.png')}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="AllStream"
                    component={AllStream}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/line.png')}
                                />
                            ) : (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/linedeactive.png')}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="AllVlog"
                    component={AllVlog}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/video.png')}
                                />
                            ) : (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/videodeactive.png')}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="AllSetting"
                    component={AllSetting}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/settings.png')}
                                />
                            ) : (
                                <Image
                                    style={styles.Image}
                                    source={require('../assets/image/settingsdeactive.png')}
                                />
                            ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    Image: {
        width: scale(30),
        height: scale(30),
    },
});
export default UserNavigator;

const Stack = createNativeStackNavigator();

function AllDashboard() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="userdashboard">
            <Stack.Screen
                name="userdashboard"
                component={Dashboard}
                options={{ animation: 'slide_from_left' }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ animation: 'flip' }}
            />
        </Stack.Navigator>
    );
}

function AllPic() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="PictureSection">
            <Stack.Screen
                name="PictureSection"
                component={PictureSection}
                options={{ animation: 'slide_from_left' }}
            />
        </Stack.Navigator>
    );
}

function AllStream() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="LiveStreams">
            <Stack.Screen
                name="LiveStreams"
                component={LiveStreams}
                options={{ animation: 'slide_from_right' }}
            />
        </Stack.Navigator>
    );
}

function AllVlog() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="VlogSection">
            <Stack.Screen
                name="VlogSection"
                component={VlogSection}
                options={{ animation: 'flip' }}
            />
        </Stack.Navigator>
    );
}

function AllSetting() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Setting">
            <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ animation: 'slide_from_left' }}
            />
        </Stack.Navigator>
    );
}
