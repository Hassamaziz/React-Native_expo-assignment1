import React from 'react';
import {View, Text, Image, StyleSheet,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SignIn = props => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 20}}>
        {!props.para && (
        <Pressable onPress={handleGoBack}>
          <Image
            style={{height: 20, width: 20, marginTop: 20}}
            source={require('../../Assets/backarrow.png')}
          /></Pressable>
        )}

        <View style={styles.detailDiv}>
          <View>
            {props.para && <Text style={styles.para}>{props.para}</Text>}

            <Text style={styles.Heading}>{props.title}</Text>
          </View>
          <Image
            style={{height: 35, width: 35, marginTop: 20}}
            source={props.img}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 45,
    letterSpacing: 0,
    color: 'rgba(31, 31, 31, 1)',
  },
  para: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: 'background: rgba(129, 129, 129, 1)',
  },
  detailDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
});