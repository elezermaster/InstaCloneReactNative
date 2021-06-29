
import 'react-native-gesture-handler';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomesStackScreen from './home.routes';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const Router = ()=> {
    return (
    <Tab.Navigator>
    <Tab.Screen 
      name="Home" 
      component={HomesStackScreen}  
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size} />
        ),
      }}/>
    <Tab.Screen 
      name="Discovery" 
      component={HomesStackScreen} 
      options={{
        tabBarLabel: 'Discovery',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      }}/>
    <Tab.Screen 
      name="Post" 
      component={HomesStackScreen} 
      options={{
        tabBarLabel: 'Post',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle-outline" color={color} size={size} />
        ),
      }}/>
    <Tab.Screen 
      name="Notifications" 
      component={HomesStackScreen} 
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="notifications-outline" color={color} size={size} />
        ),
      }}/>
    <Tab.Screen 
      name="Profile" 
      component={HomesStackScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" color={color} size={size} />
        ),
      }}/>

</Tab.Navigator>
    );
}

export default Router;