import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../BottomTabs/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Home from './component/home';
const Drawer = createDrawerNavigator();
const AboutScreenDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
export default AboutScreenDrawer;