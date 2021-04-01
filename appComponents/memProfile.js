import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './compStyles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {memUID} from './memberLogin';


function permission (){
  console.log("Hello");
  //establish get connection with backend API

      /*
          API to be called:  (get) /memberFE/permission
          Query Params: memberUID(=you should receive this upon login as message))
          Response: merchantid, question(=question provided in this set up is Are you legal)
          error: message:'No info request found'

          Please make the axios call below
      */
      
      // axios
//     .get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(function (response) {
//       // handle success
//       alert(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       // handle error
//       alert(error.message);
//     })



  //After this call, you should basically initiate a popup/dialog box with 2 buttons: Yes to share info, No to deny info
  //You can use the concept of states to manage this. The two methods below are for when those buttons are pushed
}

function agree(){
  console.log("Hello1");

  /*
          API to be called:  (get) /dataprocessing
          Query Params: merchantUID(you get this as response from permissions function above), memberUID(=you should receive this upon login as message), question(= You get this as response from permissions function above)
          Response: 200 OK

          Please make the axios call below
      */
      
      // axios
//     .get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(function (response) {
//       // handle success
//       alert(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       // handle error
//       alert(error.m
}

function disagree(){
    console.log("Hello2");

  /*
          API to be called:  (get) /denied
          Query Params: merchantUID(you get this as response from permissions function above), memberUID(=you should receive this upon login as message), question(= You get this as response from permissions function above)
          Response: 200 OK
          
          Please make the axios call below
      */
      
      // axios
//     .get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(function (response) {
//       // handle success
//       alert(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       // handle error
//       alert(error.m
}

const testValidJWTMem = async () => {
  try{
    const authHeader = {'x-access-token': await AsyncStorage.getItem('memJWT')};
    const response = await axios.get('http://d1340493a24f.ngrok.io/userTest', {headers: authHeader });
    alert('id is ' + JSON.stringify(response.data.id));
    console.log(memUID.id);
  }

  catch (error) {
    alert(JSON.stringify(error.response.data));
  }
}


const memProfile = ({history}) => {
  const logOut = async () => {
    try{
      await AsyncStorage.removeItem('memJWT');
      memUID.id = ''
      console.log(memUID.id);
      history.push('/');
    }
    
    catch (error) {
      alert(error.response.data);
    }
  }


  return(
    <View>
      <Text style={styles.header}>
        Welcome to the Member Profile Page!
      </Text>

      <View>
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={testValidJWTMem}>
          <Text> Test JWT Authentication </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress= {permission}>
          <Text> Click to begin data sharing </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress= {logOut}>
          <Text> Log Out </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default memProfile;