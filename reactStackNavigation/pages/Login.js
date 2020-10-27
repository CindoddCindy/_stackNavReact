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
  Image
  
} from 'react-native';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState ('');
  const onPressLearnMore = () => {
    //For generating alert on buttton click
    alert('Login');
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
     
      <Image
      source={require('../images/zona_icon_test.png')}
      style={{width:80,height:100}}
      />
   
        <Text>Login</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'UserName'}
          style={styles.input}
        />
        <Text style={{color: 'purple'}}>{userName}</Text>
        <TextInput
        value={userEmail}
        onChangeText={(userEmail)=> setUserEmail(userEmail)}
        placeholder={'UserEmail'}
        style={styles.input}
        />
        <Text style ={{color:'purple'}}>{userEmail}</Text>

        <Button 
        onPress={onPressLearnMore}
         title="Click Me"
         color="#670099"
        >

        </Button>
         

      </View>
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
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});

export default Login;