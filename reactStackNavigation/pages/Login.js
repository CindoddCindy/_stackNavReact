//React Native TextInput
//https://aboutreact.com/react-native-textinput/

//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState ('');
  const onPressLearnMore = () => {
    //For generating alert on buttton click
    alert('Login');
  }

  const handlerLongClick = () => {
    //handler for Long Click
    alert('Button Long Pressed');
  };

  const handlerClick = () => {
    //handler for Long Click
    alert('Button Long Pressed');
  };
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.container}>
     
      <Image
      source={require('../images/zona_icon_test.png')}
      style={styles.images}
      />
   
   <Text style={styles.title}>Input Name</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'UserName'}
          style={styles.input}
        />

<Text style={styles.title}>Input Email</Text>
       
        <TextInput
        value={userEmail}
        onChangeText={(userEmail)=> setUserEmail(userEmail)}
        placeholder={'UserEmail'}
        style={styles.input}
        />
       

        <TouchableOpacity
onPress={() => navigation.navigate('Regis')}
          activeOpacity={0.6}
          style={styles.buttonStyleLogin}>
          <Text style={styles.buttonTextStyle}>
              Login
          </Text>
        </TouchableOpacity>


      
<TouchableOpacity
onPress={() => navigation.navigate('Regis')}
          //onLongPress={handlerLongClick}
          //onPress={handlerClick}
          //Here is the trick
          activeOpacity={0.6}
          style={styles.buttonStyleSignUp}>
          <Text style={styles.buttonSignUpTextStyle}>
              Sign Up
          </Text>
        </TouchableOpacity>


         

      </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },

  images:{
    width: 80,
    height: 80,
    padding: 10,
    marginTop: 30,
    marginBottom: 20,

  },
  title: {
    fontSize: 12,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 20,
    
  },
  buttonStyleLogin: {
    backgroundColor: '#670099',
      color: 'white',
      width: "80%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      marginRight: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '5%'
   
  },
  buttonStyleSignUp: {
    backgroundColor: 'white',
      color: 'purple',
      width: "80%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      marginRight: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '5%'
   
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonSignUpTextStyle: {
    color: '#670099',
    textAlign: 'center',
    fontSize: 16,

  },
 
 

});

export default Login;