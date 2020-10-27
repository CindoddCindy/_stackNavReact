//import * as React from 'react';

import {StyleSheet, View,Text,SafeAreaView,TextInput, ScrollView, Image,Button} from 'react-native';

import React, {useState} from 'react';


const Regis = ({navigation}) =>{
    
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNumb, setUserPhoneNumb] =useState ('');
    const [userBirthDate, setUserBirthDate] =useState ('');
    const [userPassword, setUserPassword] = useState('');
    const [userPassConf, setUSerPassConf] = useState('');

    const onPressLearnMore = () => {
        //For generating alert on buttton click
        alert('Login');
      }
    
    return(

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
      <View style={styles.container}>
      <Image
      source={require('../images/zona_icon_test.png')}
      style={{width:80,height:100}}
      />
   
        <Text> Regis Here</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'UserName'}
          style={styles.input}
        />
        <Text style={{color: 'blue'}}>{userName}</Text>
        <Text style={{color: 'purple'}}>{userName}</Text>
        <TextInput
        value={userEmail}
        onChangeText={(userEmail) => setUserEmail(userEmail)}
        placeholder={'UserEmail'}
        style={styles.input}
        />
        <Text style={{color: 'purple'}}>{userEmail}</Text>
        <TextInput
        value={userBirthDate}
        onChangeText={(userBirthDate) => setUserBirthDate(userBirthDate)}
        placeholder={'UserBirthDate'}
        style={styles.input}
        />
        <Text style={{color: 'purple'}}>{userBirthDate}</Text>
        <TextInput
        value={userPhoneNumb}
        onChangeText={(userPhoneNumb) => setUserPhoneNumb(userPhoneNumb)}
        placeholder={'UserPhoneNumb'}
        style={styles.input}
        />
        <Text style={{color: 'purple'}}>{userPhoneNumb}</Text>
        <TextInput
        value={userPassword}
        onChangeText={(userPassword) => setUserPassword(userPassword)}
        placeholder={'UserPassword'}
        style={styles.input}
        />
        <Text style={{color: 'purple'}}>{userPassword}</Text>
        <TextInput
        value={userPassConf}
        onChangeText={(userPassConf) => setUSerPassConf(userPassConf)}
        placeholder={'UserPassConf'}
        style={styles.input}
        />
        <Text style={{color: 'purple'}}>{userPassConf}</Text>

        <Button 
        onPress={onPressLearnMore}
         title="Click Me"
         color="#670099"
        >

        </Button>

        </View>
 </ScrollView>
 </SafeAreaView>
      
    );
}

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

export default Regis;