import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
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

import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/HomeScreen'

const Tab = createBottomTabNavigator();
////const HomeStack = createStackNavigator();
//const AppNavigator = createStackNavigator();
//const NavigationContainer = createAppContainer();


const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings!' }}
      />
    </SettingsStack.Navigator>
  );
}

function HomeScreenNav({ navigation }) {
  React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => 
                    <View style={{
                      marginLeft:10,
                      //backgroundColor: '#8c8c8c', 
                      //color: '#8c8c8c',
                      //flexDirection: 'row'
                      }}>
                      <Ionicons name="search" color={'#000'} size={30} />
                    </View>,
        headerRight: () => 
                <View style={{
                  marginRight:10,
                  //backgroundColor: '#8c8c8c', 
                  //color: '#8c8c8c',
                  //flexDirection: 'row'
                  }}>
                  <Ionicons name="paper-plane" color={'#000'} size={30} 
                    onPress={() => navigation.navigate('Settings')}
                  />
                </View>,   
        headerTitle: () => (
          <Text
            style={{color: 'black', fontWeight: 'bold', alignSelf:'center', fontSize:24}}>
            Instagram
          </Text>
        ),
        headerStyle: {
          backgroundColor: '#d8d8d8', //'#f4511e',

        },
        headerTintColor: 'black', //Set Header text color
        // headerTitleStyle: {
        //   fontWeight: 'bold', //Set Header text style
        // },      
      },
      
      )
    }, [navigation]);

  return (
    <View>
      <HomeScreen/>
      {/* <View style={{     
                zIndex: 1040,
                flex: 1,
                alignSelf: 'flex-end',
                marginTop: -45,
                position: 'absolute',             
                right: 60,
        }}>
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View> */}
    </View>
  );
}

//const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
        screenOptions={{
          title:'Instagrama',
          
            // headerStyle: {
            //   backgroundColor: '#d8d8d8', //Set Header color

            // },
            // headerTintColor: 'black', //Set Header text color
            // headerTitleStyle: {
            //   fontWeight: 'bold', //Set Header text style
            // },
            // flex: 1,
            // flexDirection: 'row',
            // alignSelf:'center',
            // alignItems:'center',
            // marginLeft: '50%',
        }}
    >
      <HomeStack.Screen 
        name="Homee" 
        component={HomeScreenNav}  

        />
      {/* other screens */}
    </HomeStack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
                  name="Home" 
                  component={HomeStackScreen} 
                  options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="home-outline" color={color} size={size} />
                    ),
                  }}/>
                <Tab.Screen 
                  name="Discovery" 
                  component={HomeScreen} 
                  options={{
                    tabBarLabel: 'Discovery',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="search" color={color} size={size} />
                    ),
                  }}/>
                <Tab.Screen 
                  name="Post" 
                  component={HomeScreen} 
                  options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="add-circle-outline" color={color} size={size} />
                    ),
                  }}/>
                <Tab.Screen 
                  name="Notifications" 
                  component={HomeScreen} 
                  options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="notifications-outline" color={color} size={size} />
                    ),
                  }}/>
                <Tab.Screen 
                  name="Profile" 
                  component={HomeScreen} 
                  options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="person-outline" color={color} size={size} />
                    ),
                  }}/>
    
    </Tab.Navigator>
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