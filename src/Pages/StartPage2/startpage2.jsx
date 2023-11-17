import { View, Image,StyleSheet } from 'react-native'
import React from 'react'
import { Heading } from '../../Components/FirstPagesText/StartTexts';
import { Paragraph } from '../../Components/FirstPagesText/StartTexts';
import RoundImageButton from '../../Components/FirstPage button/Buttons';
import { StartFooter } from '../../Components/FirstPagesText/StartTexts';

export default function StartPage2({navigation}) {
  return (
    <View style={Style.container} >
      <Image style={{height:250,width:250}} source={require('../../Assets/Beachimage.png')}/>
      <Heading title="Customize your High-end travel" />
      <Paragraph Text="Countless high-end entertainment facilities" />
      <RoundImageButton onPress={() => navigation.navigate("home3")}/>
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