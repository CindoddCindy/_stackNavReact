import 'react-native-gesture-handler';

import * as React from 'react';


import{MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {Button, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';





import Login from './pages/Login';
import Regis from './pages/Regis';


import Home from './bottomnav/Home';
import Booking from './bottomnav/Booking';
import Inbox from './bottomnav/Inbox';
import Profile from './bottomnav/Profile';




const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Home = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: Home },
    Details: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const Booking = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Booking: { screen: Booking },
    Details: { screen: Booking },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);

const Inbox = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Booking: { screen: Inbox },
    Details: { screen: Inbox },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);

const Profile = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Booking: { screen: Profile },
    Details: { screen: Profile },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);






function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Login">
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle:{
            backgroundColor:'#670099',

          },
          headerTintColor: '#fff',
          headerBackTitleStyle:{
            fontWeight:'bold',
          },
        }}
        />
        <Stack.Screen
        name="Regis"
        component={Regis}
        options={{
          title: 'Regis',
          headerStyle:{
            backgroundColor:"#670099"
          },
          headerTintColor:'#fff',
          headerBackTitleStyle:{
            fontWeight:'bold',
          },
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>




//bottom nav 





  );
}



export default App;



const App = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Booking: { screen: Booking },
    Inbox: {screen : Inbox},
    Profile: {screen : Profile},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Booking') {
          iconName = `ios-checkmark-circle${focused ?
            '' : '-outline'
          }`;
        }
        else if (routeName === 'Inbox'){
          iconName = `ios-checkmark-circle${focused ?
            '' : '-outline'
          }`;
          
        }
        else if (routeName === 'Profile'){
          iconName = `ios-checkmark-circle${focused ?
            '' : '-outline'
          }`;

        }
        return <IconComponent
                 name={iconName}
                 size={25}
                 color={tintColor}
               />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);

