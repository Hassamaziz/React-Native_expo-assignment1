import { View, Image,StyleSheet } from 'react-native'
import React from 'react'
import { Heading} from '../../Components/FirstPagesText/StartTexts';
import { Paragraph } from '../../Components/FirstPagesText/StartTexts';
import RoundImageButton from '../../Components/FirstPage button/Buttons';
import { StartFooter } from '../../Components/FirstPagesText/StartTexts';

export default function StartPage3({navigation}) {
  return (
    <View style={Style.container} >
      <Image  style={{height:250,width:250}}  source={require('../../Assets/monochromatic.png')}/>
      <Heading title="High-end leisure projects to choose from" />
      <Paragraph Text="The world's first-class modern leisure 
      and entertainment method" />
      <RoundImageButton onPress={() => navigation.navigate("settingcenter")}/>

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