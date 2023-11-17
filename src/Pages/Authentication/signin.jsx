import React from 'react';
import AuthHeader from '../../Components/AuthHeader/AuthHeader'
import Input from '../../Components/InputFields/InputFields';
import {View, Image, Text, StyleSheet} from 'react-native';
import LargeButton from '../../Components/LargeButton/LargeButton';

const SignIn = ({navigation}) => {
 
  return (  
    <View style={{flex: 1}}>
   
      <View style={{flex: 1, marginHorizontal: 15 ,marginVertical:20}}>
        <AuthHeader title="Sign In" 
        onPress={()=>navigation.navigate("signup")}/>
      </View>

      <View style={{flex: 4}}>
        <Input
          inputImg={require('../../Assets/mail.png')}
          placeHolder="Enter Your E-mail"
        />

        <View style={styles.afterSignIn}>
          <Image source={require('../../Assets/line.png')} />
          <Text style={{color: 'rgba(0, 0, 0, 1)'}}>Or Continue with</Text>
          <Image source={require('../../Assets/line.png')} />
        </View>

        <View style={{marginTop: 15}}>
          <LargeButton
            buttonImg={require('../../Assets/google.png')}
            text="Continue with Google"
            color="rgba(31, 31, 31, 1)"
          />
          <LargeButton
            buttonImg={require('../../Assets/Negative.png')}
            text="Continus with Facebook"
            color="rgba(59, 88, 150, 1)"
          />
        </View>
      
     

      </View>
      <View style={{flex: 0.5}}>
        <LargeButton text="Continue"  onPress={()=>navigation.navigate("homescreen")} color="rgba(3, 115, 243, 1)" />
      </View>
    </View>  
      
  );
};

export default SignIn;

const styles = StyleSheet.create({
  afterSignIn: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});