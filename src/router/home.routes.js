
import 'react-native-gesture-handler';
import React from 'react'
import HomeScreen from '../screens/HomeScreen/'
import logo from '../assets/images/FriendsLogo.png'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator
          screenOptions={{
            title:'Instagrama',
          }}
      >
        <HomeStack.Screen 
          name="Discovery" 
          component={HomeRoutes}  
          />
      </HomeStack.Navigator>
    );
  }

const HomeRoutes = ({ navigation })=>{

    //function DiscoveryScreenNav({ navigation }) {
        React.useLayoutEffect(() => {
            navigation.setOptions({
              headerLeft: () => 
                          <View style={{marginLeft:10,}}>
                            <Ionicons name="search" color={'#000'} size={30} />
                          </View>,
              headerRight: () => 
                      <View style={{ marginRight:10,}}>
                        <Ionicons name="paper-plane" color={'#000'} size={30} 
                          onPress={() => navigation.navigate('Settings')}
                        />
                      </View>,   
              headerTitle: () => (
                <Image source={logo} resizeMode="contain" style={{width:270,alignSelf:'center'}}/>
              ),
              headerStyle: {
                backgroundColor: '#d8d8d8', //'#f4511e',
      
              },
              headerTintColor: 'black', //Set Header text color    
            },)
          }, [navigation]);
        return (
          <View>
            <HomeScreen/>{}
          </View>
        );
      //}
    

}

export default HomeStackScreen;