import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View, Image } from 'react-native';
//import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';
//import { Button } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient';
//import { createAppContainer } from '@react-navigation/native';
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//import {NavigationContainer} from 'react-navigation'; 
///import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//import { SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';

//import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/HomeScreen'
//import logo from './src/assets/images/FriendsLogo.png'
//import HomesStackScreen from './src/router/home.routes'

import Router from './src/router/index'

//const Tab = createBottomTabNavigator();
//const HomeStack = createStackNavigator();


// function HomeScreenNav({ navigation }) {
//   React.useLayoutEffect(() => {
//       navigation.setOptions({
//         headerLeft: () => 
//                     <View style={{
//                       marginLeft:10,
//                       //backgroundColor: '#8c8c8c', 
//                       //color: '#8c8c8c',
//                       //flexDirection: 'row'
//                       }}>
//                       <Ionicons name="search" color={'#000'} size={30} />
//                     </View>,
//         headerRight: () => 
//                 <View style={{
//                   marginRight:10,
//                   //backgroundColor: '#8c8c8c', 
//                   //color: '#8c8c8c',
//                   //flexDirection: 'row'
//                   }}>
//                   <Ionicons name="paper-plane" color={'#000'} size={30} 
//                     onPress={() => navigation.navigate('Settings')}
//                   />
//                 </View>,   
//         headerTitle: () => (
//           // <Text
//           //   style={{color: 'black', fontWeight: 'bold', alignSelf:'center', fontSize:24}}>
//           //   Instagram
//           // </Text>
//           <Image source={logo} resizeMode="contain" style={{width:270,alignSelf:'center'}}/>
//         ),
//         headerStyle: {
//           backgroundColor: '#d8d8d8', //'#f4511e',

//         },
//         headerTintColor: 'black', //Set Header text color
//         // headerTitleStyle: {
//         //   fontWeight: 'bold', //Set Header text style
//         // },      
//       },
      
//       )
//     }, [navigation]);

//   return (
//     <View>
//       <HomeScreen/>
//       {/* <View style={{     
//                 zIndex: 1040,
//                 flex: 1,
//                 alignSelf: 'flex-end',
//                 marginTop: -45,
//                 position: 'absolute',             
//                 right: 60,
//         }}>
//         <Button
//           title="Settings"
//           onPress={() => navigation.navigate('Settings')}
//         />
//       </View> */}
//     </View>
//   );
// }
// function DiscoveryScreenNav({ navigation }) {
//   React.useLayoutEffect(() => {
//       navigation.setOptions({
//         headerLeft: () => 
//                     <View style={{marginLeft:10,}}>
//                       <Ionicons name="search" color={'#000'} size={30} />
//                     </View>,
//         headerRight: () => 
//                 <View style={{ marginRight:10,}}>
//                   <Ionicons name="paper-plane" color={'#000'} size={30} 
//                     onPress={() => navigation.navigate('Settings')}
//                   />
//                 </View>,   
//         headerTitle: () => (
//           <Image source={logo} resizeMode="contain" style={{width:270,alignSelf:'center'}}/>
//         ),
//         headerStyle: {
//           backgroundColor: '#d8d8d8', //'#f4511e',

//         },
//         headerTintColor: 'black', //Set Header text color    
//       },)
//     }, [navigation]);
//   return (
//     <View>
//       <HomeScreen/>{}
//     </View>
//   );
// }
// function PostScreenNav({ navigation }) {
//   React.useLayoutEffect(() => {
//       navigation.setOptions({
//         headerLeft: () => 
//                     <View style={{marginLeft:10,}}>
//                       <Ionicons name="search" color={'#000'} size={30} />
//                     </View>,
//         headerRight: () => 
//                 <View style={{ marginRight:10,}}>
//                   <Ionicons name="paper-plane" color={'#000'} size={30} 
//                     onPress={() => navigation.navigate('Settings')}
//                   />
//                 </View>,   
//         headerTitle: () => (
//           <Image source={logo} resizeMode="contain" style={{width:270,alignSelf:'center'}}/>
//         ),
//         headerStyle: {
//           backgroundColor: '#d8d8d8', //'#f4511e',

//         },
//         headerTintColor: 'black', //Set Header text color    
//       },)
//     }, [navigation]);
//   return (
//     <View>
//       <HomeScreen/>{}
//     </View>
//   );
// }
// function NotificationsScreenNav({ navigation }) {
//   React.useLayoutEffect(() => {
//       navigation.setOptions({
//         headerLeft: () => 
//                     <View style={{marginLeft:10,}}>
//                       <Ionicons name="search" color={'#000'} size={30} />
//                     </View>,
//         headerRight: () => 
//                 <View style={{ marginRight:10,}}>
//                   <Ionicons name="paper-plane" color={'#000'} size={30} 
//                     onPress={() => navigation.navigate('Settings')}
//                   />
//                 </View>,   
//         headerTitle: () => (
//           <Image source={logo} resizeMode="contain" style={{width:270,alignSelf:'center'}}/>
//         ),
//         headerStyle: {
//           backgroundColor: '#d8d8d8', //'#f4511e',

//         },
//         headerTintColor: 'black', //Set Header text color    
//       },)
//     }, [navigation]);
//   return (
//     <View>
//       <HomeScreen/>{}
//     </View>
//   );
// }


// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator
//         screenOptions={{
//           title:'Instagrama',
//         }}
//     >
//       <HomeStack.Screen 
//         name="Homee" 
//         component={HomeScreenNav}  
//         />
//     </HomeStack.Navigator>
//   );
// }
// function DiscoveryStackScreen() {
//   return (
//     <HomeStack.Navigator
//         screenOptions={{
//           title:'Instagrama',
//         }}
//     >
//       <HomeStack.Screen 
//         name="Discovery" 
//         component={DiscoveryScreenNav}  
//         />
//     </HomeStack.Navigator>
//   );
// }
// function PostStackScreen() {
//   return (
//     <HomeStack.Navigator
//         screenOptions={{
//           title:'Instagrama',
//         }}
//     >
//       <HomeStack.Screen 
//         name="Post" 
//         component={PostScreenNav}  
//         />
//     </HomeStack.Navigator>
//   );
// }
// function NotificationsStackScreen() {
//   return (
//     <HomeStack.Navigator
//         screenOptions={{
//           title:'Instagrama',
//         }}
//     >
//       <HomeStack.Screen 
//         name="Notifications" 
//         component={NotificationsScreenNav}  
//         />
//     </HomeStack.Navigator>
//   );
// }

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="settings"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings!' }}
      />
    </SettingsStack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Router/>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
  //  <GestureHandlerRootView>
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="HomeActivity"
        screenOptions={{headerShown: false}}
        >
        <RootStack.Screen 
          name="Home" 
          component={HomeTabs} />
        <RootStack.Screen 
          name="Settings" 
          component={SettingsStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  //  </GestureHandlerRootView>
  );
}

registerRootComponent(App);