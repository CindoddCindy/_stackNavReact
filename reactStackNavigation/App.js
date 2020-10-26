import 'react-native-gesture-handler';

import * as React from 'react';

import {Button, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';

const Stack = createStackNavigator();

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
            backgroundColor:'#f4511e',

          },
          headerTintColor: '#fff',
          headerBackTitleStyle:{
            fontWeight:'bold',
          },
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
