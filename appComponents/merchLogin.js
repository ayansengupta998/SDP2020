import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './compStyles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const merchLogin = ({history}) => {
  const [username, onChangeN] = React.useState('');

  const loginMerch = async () => {
    try{
      const response = await axios.post('http://27d0947af10c.ngrok.io/login', {
        username: username
      })
      
      await AsyncStorage.setItem('merchJWT', response.data.token);
      history.push('/merchProfile');
    }

    catch (error) {
      alert(error.response.data);
    }
  }


  return (
    <View>
        <Text style={styles.header}>
          Welcome to NoID Merchant Login!
        </Text>

        <View>
          <TextInput
            style={styles.inputBar}
            placeholder={'Username'}
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={(text) => onChangeN(text)}
            value = {username}
          />
          
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress = {() => history.push("/merchProfile")}>
            <Text> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle} 
            onPress = {() => history.push("/")}>
            <Text> Go to Home Page </Text> 
          </TouchableOpacity>
        </View>

    </View>
  );
}

export default merchLogin;