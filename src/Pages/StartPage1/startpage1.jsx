import { View, Image,StyleSheet  } from 'react-native'
import React from 'react'
import { Heading, StartFooter } from '../../Components/FirstPagesText/StartTexts';
import { Paragraph } from '../../Components/FirstPagesText/StartTexts';
import RoundImageButton from '../../Components/FirstPage button/Buttons';
import { Link } from 'expo-router';


export default function StartPage1({navigation}) {
  return (
    <View style={Style.container} >
      <Image  style={{height:250,width:250}}  source={require('../../Assets/Bagwomen.png')}/>
      <Heading title="Make your own private travel plan" />
      <Paragraph Text="Formulate your strategy to receive wonderful gift packs" />
   <RoundImageButton onPress={() => navigation.navigate("home2")}/>
     <StartFooter/>
    </View>
  )
}
const Style = StyleSheet.create({
  container: {
    
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

