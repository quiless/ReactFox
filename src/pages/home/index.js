import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native';
import { Camera } from '../../components/camera'



const MenuStack = createDrawerNavigator(
  {
    Camera: Camera,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#003366',
      },
      headerTintColor: '#003366',
      headerTitleStyle: {
        color: 'white',
      },
      title: 'Grupo Fox',
      headerLeft: (
        <Icon name="menu" />
      )
    },
  }
);


const StackAppMenu = StackNavigator({ MenuStack: { screen: MenuStack } });

export default class StackApp extends React.Component {
  render() {
    return <StackAppMenu />;
  }
}