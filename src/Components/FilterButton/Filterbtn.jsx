import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

const Filterbtn = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image style={{height: 20, width: 25}} source={props.img} />
    </TouchableOpacity>
  );
};

export default Filterbtn;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 115, 243, 1)',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
});