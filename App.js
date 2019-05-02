//This is an example code for Bottom Navigation//
import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator  } from 'react-native';
import { List, ListItem} from "react-native-elements";

//ikonice
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator, createBottomTabNavigator, createAppContainer,} from 'react-navigation';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import SeznamScreen from './pages/SeznamScreen';

const SeznamStack = createStackNavigator({
  Seznam: {
    screen: SeznamScreen,
    navigationOptions: {
      header: null,
      }
  },
  Details: {
    screen: DetailsScreen,
  }
});

const App = createBottomTabNavigator({
    Home: HomeScreen,
    Seznam: SeznamStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-navigate`;
        } else if (routeName === `Seznam`) {
          iconName = `ios-list`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#283593',
      inactiveTintColor: 'gray',
    },
  }

);

export default createAppContainer(App);

