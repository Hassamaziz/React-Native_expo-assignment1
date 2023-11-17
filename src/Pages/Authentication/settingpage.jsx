import React from 'react';
import {View,Text,Pressable} from 'react-native';
import AuthHeader from'../../Components/AuthHeader/AuthHeader';
import Input from '../../Components/InputFields/InputFields';
import LargeButton from '../../Components/LargeButton/LargeButton';

const SettingsCenter = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 20,marginTop:10}}>
        <AuthHeader
          title="Alan Love"
          img={require('../../Assets/personimg.png')}
        
        />
      </View>

      <View style={{flex: 4}}>
        <Input
          lable="E-mail address"
          inputImg={require('../../Assets/mail.png')}
          placeHolder="Enter Your E-mail"
        />

        <Input
          lable="Password"
          inputImg={require('../../Assets/password.png')}
          placeHolder="Enter Password"
        />
        <Input
          lable="Authenticate"
          inputImg={require('../../Assets/username.png')}
          name="Travel Blogger"
          placeHolder="Enter Password"
        />
       
      </View>
    
      <View style={{flex: 0.5}}>
        <LargeButton text="Save Settings" onPress={() => navigation.navigate("signup")} color="rgba(3, 115, 243, 1)" />
      </View>
    </View>
  );
};

export default SettingsCenter;