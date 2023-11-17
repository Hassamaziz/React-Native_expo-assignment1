import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const LargeButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}  style={[styles.button, {backgroundColor: props.color}]}>
      {props.buttonImg && (
        <Image style={{height: 18, width: 18}}  source={props.buttonImg} />
      )}
      <Text style={styles.buttonTxt}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  buttonTxt: {
    marginStart: 4,
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});