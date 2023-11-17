import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import LargeButton from '../LargeButton/LargeButton';

const HorizontalCard = ({ image, name, occupation }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        {typeof image === 'string' && image.startsWith('http') ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image source={image} style={styles.image} />
        )}
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle}>{occupation}</ListItem.Subtitle>
        </ListItem.Content>
        {isPressed ? (
          <View style={styles.buttonContainer}>
            <LargeButton text="Edit Profile" color="rgba(3, 115, 243, 1)" />
          </View>
        ) : (
          <Image source={require('../../Assets/forwardArrow.png')} />
        )}
      </TouchableOpacity>
    </Card>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginHorizontal: 0,
    marginVertical:-10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: -15, 
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  title: {
    fontWeight:'bold',
    fontSize: 18,
    lineHeight: 26,
},

subtitle: {
   color:'lightgrey',
   fontWeight:'bold',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: .7,


}
});

export default HorizontalCard;
