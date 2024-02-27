import Mytabs from './components/navigations/mytabs';
// import Login from './components/login';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import AboutScreenDrawer from './components/drawerScreen/aboutScreen';
import Home from './components/drawerScreen/component/home';
import Details from './components/navigations/details';
import EmailLogin from './components/navigations/EmailLogin';
import RegisterEmail from './components/navigations/registerEmail';
import MessageScreen from './components/navigations/messageScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EmailLogin" component={EmailLogin} options={{ headerShown: false }} />
      <Stack.Screen name="registerEmail" component={RegisterEmail} options={{ headerShown: false }} />
      <Stack.Screen name="mytab" component={Mytabs} options={{ headerShown: false }} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="message" component={MessageScreen} />
      {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainStackNavigator} options={{headerShown: false}} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App