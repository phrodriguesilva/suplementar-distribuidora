import React from 'react';
import {View, Text, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

//Screens
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import CartScreen from './screens/CartScreen'

//Screen names
const homeName = "Início";
const profileName = 'Perfil';
const cartName = 'Carrinho';

const Tab =createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#fff',
                headerShown: false,
                tabBarStyle:{ 
                    backgroundColor: 'black',
                    position: 'absolute',
                    borderBottomColor: 'white',
                    border: 2,
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }  else if (rn === cartName) {
                        iconName = focused ? 'cart' : 'cart-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={'#CB0303'}/>
                }      
            })}> 

                <Tab.Screen name={homeName} component={HomeScreen} options={{unmountOnBlur: true}}/>
                <Tab.Screen name={profileName} component={ProfileScreen} options={{unmountOnBlur: true,}}/>
                <Tab.Screen name={cartName} component={CartScreen} options={{unmountOnBlur: true}}/>    
                 </Tab.Navigator>



           
        </NavigationContainer>
    );
}