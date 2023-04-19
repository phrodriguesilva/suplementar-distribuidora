import React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

//Screens
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'

//Screen names
const homeName = "Início";
const profileName = 'Perfil';

const Tab =createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                activeTintColor: '#000',
                inactiveTintColor: '#fff',
                tabBarStyle:{ backgroundColor: 'black'},
                labelStyle: { paddingBottom: 10, fontSize: 10, },
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={'#CB0303'}/>
                }      
            })}> 

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={profileName} component={HomeScreen}/>  
                 </Tab.Navigator>



           
        </NavigationContainer>
    );
}