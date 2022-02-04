import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  DetailsScreen,
  ScheduleScreen,
  SettingsScreen,
} from '../screens';

import {COLORS, SIZES} from '../constants';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-vector-icons/Icon';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: [
          {
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
          },
          null,
        ],
        tabBarIcon: ({focused}) => {
          const icons = {
            Schedule: 'calendar-alt',
            HomeStack: 'dumbbell',
            Settings: 'cog',
          };

          return (
            <FontAwesome5Icons
              name={icons[route.name]}
              color={focused ? COLORS.accent : COLORS.black}
              style={{
                fontSize: 19,
                opacity: focused ? 1 : 0.6,
              }}></FontAwesome5Icons>
          );
        },
        tabBarLabel: ({focused}) => {
          const labels = {
            Schedule: 'Today',
            HomeStack: 'All Exercises',
            Settings: 'Settings',
          };
          return (
            <Text
              style={{
                color: focused ? COLORS.accent : COLORS.black,
                marginBottom: 4,
                opacity: focused ? 1 : 0.6,
                fontWeight: 'bold',
              }}>
              {labels[route.name]}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="HomeStack" component={StackNavigator} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
