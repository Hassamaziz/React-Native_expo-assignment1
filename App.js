
import { View,RefreshControl,ScrollView } from 'react-native'
import React from 'react'
import StartPage1 from './src/Pages/StartPage1/startpage1';
import StartPage2 from './src/Pages/StartPage2/startpage2';
import StartPage3 from './src/Pages/StartPage3/startpage3';
import SettingsCenter from './src/Pages/Authentication/settingpage';
import SignIn from './src/Pages/Authentication/signin';
import SignUp from './src/Pages/Authentication/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Pages/HomeScreen/Home';
import Wallet from './src/Pages/Wallet/Wallet';
import Guide from './src/Pages/Guide/Guide';
import Chart from './src/Pages/Chart/Chart';
import BottomIcons from './src/Components/BottomBarIcons/BottomIcons';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabBottom() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop:20,
        paddingBottom:20,
        height:80
      },
    }}
    initialRouteName="Home">
    <Tab.Screen
      options={{
        headerShown: false,

        tabBarIcon: ({focused}) => (
          <BottomIcons
            focused={focused}
            imageSource={require('./src/Assets/homeicon.png')}
          />
        ),
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      name="Wallet"
      component={Wallet}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <BottomIcons
            focused={focused}
            imageSource={require('./src/Assets/wallet.png')}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Guide"
      component={Guide}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <BottomIcons
            focused={focused}
            imageSource={require('./src/Assets/guide.png')}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Chart"
      component={Chart}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <BottomIcons
            focused={focused}
            imageSource={require('./src/Assets/chart.png')}
          />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
export default function App() {

  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  return (
   <View style={{flex:1}}>
    <NavigationContainer>
    <Stack.Navigator>    
    <Stack.Screen
    name="Home"
    component={StartPage1}
    options={{ headerShown: false }}
  />
    <Stack.Screen name='home2' options={{ headerShown: false }} component={StartPage2}/>
    <Stack.Screen name='home3' options={{ headerShown: false }} component={StartPage3}/>
    <Stack.Screen name='settingcenter' options={{ headerShown: false }} component={SettingsCenter}/>
    
   <Stack.Screen name='signup' options={{ headerShown: false }} component={SignUp}/>
   <Stack.Screen name='signin' options={{ headerShown: false }} component={SignIn}/>
   <Stack.Screen
   name="homescreen"
   component={TabBottom}
   options={{ headerShown: false }}
 />


   </Stack.Navigator>
    </NavigationContainer></View>
  );
}
