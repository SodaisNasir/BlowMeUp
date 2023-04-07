import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from '../screens/users/Dashboard';

const UserNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarHideOnKeyboard: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#3D4663',
          },
        }}>
        <Tab.Screen
          name="dashboard"
          component={AllDashboard}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="home" color={color} size={scale(20)} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="dashboard"
          component={AllPic}
          options={{
            tabBarIcon: ({focused}) => (focused ? <Image /> : <Image />),
          }}
        />
        <Tab.Screen
          name="dashboard"
          component={AllMid}
          options={{
            tabBarIcon: ({focused}) => (focused ? <Image /> : <Image />),
          }}
        />
        <Tab.Screen
          name="dashboard"
          component={AllVlog}
          options={{
            tabBarIcon: ({focused}) => (focused ? <Image /> : <Image />),
          }}
        />
        <Tab.Screen
          name="dashboard"
          component={AllSetting}
          options={{
            tabBarIcon: ({focused}) => (focused ? <Image /> : <Image />),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigator;

const styles = StyleSheet.create({});

const Stack = createNativeStackNavigator();

function AllDashboard() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="userdashboard">
      <Stack.Screen
        name="userdashboard"
        component={Dashboard}
        options={{animation: 'slide_from_left'}}
      />
    </Stack.Navigator>
  );
}
