import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import IssLocationScreen from './screens/IssLocationScreen'
import MeteorScreen from './screens/MeteorScreen'

const Stack = createStackNavigator();

export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home'Component={HomeScreen}/>
        <Stack.Screen name='IssLocation'Component={IssLocationScreen}/>
        <Stack.Screen name='Meteor'Component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}