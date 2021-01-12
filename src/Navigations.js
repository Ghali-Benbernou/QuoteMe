import React from 'react'
import { View,Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Categories from './Screens/Categories';

const Drawer = createDrawerNavigator();

export default function Navigations() {
    
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Categories" component={Categories} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}
