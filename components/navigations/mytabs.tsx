import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from '../BottomTabs/homeScreen'
import Setting from '../BottomTabs/setting'
import { NavigationContainer } from '@react-navigation/native';
// const Drawer= createDrawerNavigator()
const Mytabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    
    <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen}
     options={{
      tabBarIcon: ({color, size }: any) => (
        <FontAwesome name='home' size={size} color={color} />
      ),
      headerShown: false,
      tabBarLabelStyle:{
      fontSize: 18
      }
     }}
    />
     <Tab.Screen name="Settings" component={Setting}
      options={{
       tabBarIcon: ({color, size }: any) => (
         <FontAwesome name='cog' size={size} color={color} />
       ),
       headerShown: false,
       tabBarLabelStyle:{
        }
     }} />
    </Tab.Navigator>
  
  )
}
// const MyDrawer = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       {/* Add more screens as needed */}
//     </Drawer.Navigator>
//   );
// };
// export const DrawerNavigator = () => {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// };
export default Mytabs