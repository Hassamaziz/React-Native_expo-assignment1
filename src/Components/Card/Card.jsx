import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageCard = props => {
  return (
    <View style={styles.cardContainer}>
      <Image source={props.img} style={styles.image} />
      <View style={styles.textContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.secondtitle}>{props.secondtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 14,
    overflow: 'hidden',
    margin: 10,
    elevation: 2,
    backgroundColor: '#fff',
    width:'90%'
  },
  image: {
   height:'100%',
    width: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  secondtitle:{
fontSize:9,
color: 'lightgrey',
  },
});

export default ImageCard;
