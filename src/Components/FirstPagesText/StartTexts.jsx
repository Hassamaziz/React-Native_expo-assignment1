import React from 'react';
import {Text, StyleSheet,Image, View} from 'react-native';
export const Heading = props => {
  return (
    <View>
      <Text style={Style.heading}>{props.title}</Text>
    </View>
  );
};

export const Paragraph = props => {
  return (
    <View>
      <Text style={Style.text}>{props.Text}</Text>
    </View>
  );
};

export const StartFooter = () =>{
  return(
    <View>
    <Text style={Style.footer}> <Image source={require('../../Assets/Zaps.png')}/> Nordic Vacation Sponsor</Text>
    </View>
    );
    };


const Style = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 31,
    marginTop: 20,
    paddingHorizontal: 20,
    fontWeight: '600',
    color: 'black',
    lineHeight: 42,
  },
  text: {
    marginTop: 10,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 30,
    lineHeight: 27,
    color: 'rgba(180, 180, 180, 1)',
  },
  footer:{
   
    top:96,
     fontSize:15,
    color: '#595959',
    borderRadius:10,
    height:30,
    justifyContent:'center',
    alignItems:'flex-end'
    }
});