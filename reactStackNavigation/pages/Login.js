

import * as React from 'react';

import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const Login = ({navigation})=> {
    return(
       <View style = {styles.container}>
           <Text>Login</Text>
           <Text style={{
               color:'green',
               fontSize: 18
           }}></Text>

       </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
    title:{
        fontSize:25,
        alignItems:'center',
        fontWeight:'bold',
        color: 'red',
        
    },

});

export default Login;

