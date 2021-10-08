import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Categories from "./Screens/Categories";
import Drawel from "./Screens/Drawel";

const Drawer = createDrawerNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          style: {backgroundColor: '#111d5e'},
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}> */}
      <Drawer.Navigator
        drawerContent={() => <Drawel />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={Categories} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigations;
