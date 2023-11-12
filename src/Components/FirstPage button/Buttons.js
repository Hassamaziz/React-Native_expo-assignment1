import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const RoundImageButton = ({ imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={require('../../Assets/Buttonlogo.png')} style={styles.buttonImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70, 
    height: 70,
    borderRadius: 50, 
    backgroundColor: '#0373F3', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:55
  },
  buttonImage: {
    width: 40,
    height: 40,
    borderRadius: 30, 
  },
});

export default RoundImageButton;
