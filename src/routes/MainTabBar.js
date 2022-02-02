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
    <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
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
        tabBarStyle:[
            {
              height:80,
              alignItems:'center',
              justifyContent:'center',
              
            },
            null
          ]
        ,
        tabBarIcon: ({focused}) => {
          const icons = {
            Schedule: 'calendar-alt',
            HomeStack: 'dumbbell',
            Settings: 'cog',
          };

          return (
            <FontAwesome5Icons
              name={icons[route.name]}
              color={
                focused ? COLORS.accent : COLORS.black
              }
              size={15}
              ></FontAwesome5Icons>
          );
        },
      })}>
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="HomeStack" component={StackNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
