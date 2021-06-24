import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './src/screens/HomeScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
              <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
