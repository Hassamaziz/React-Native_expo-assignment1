import React from 'react';
import { View, ScrollView, Text, StyleSheet,Image, Pressable } from 'react-native';
import HorizontalCard from '../../Components/PartnerCard/PartnerCard';

const Chart = () => {
  const data = [
    {
      id: 1,
      name: 'Alanlove',
      occupation: 'Travel Blogger',
      image: require('../../Assets/person1.png'),
    },
    {
      id: 2,
      name: 'Charlotte',
      occupation: 'Chief Travel Experiencer ',
      image: require('../../Assets/person2.png'),
    },
    {
      id: 3,
      name: 'Evangeline',
      occupation: 'Chief Travel Experiencer',
      image: require('../../Assets/person3.png'),
    },
    {
      id: 4,
      name: 'Geraldine',
      occupation: 'Private tour guide',
      image: require('../../Assets/person4.png'),
    },
    {
      id: 5,
      name: 'Prudence',
      occupation: 'Travel youtube master',
      image: require('../../Assets/person5.png'),
    },
    {
      id: 6,
      name: 'Hassam Aziz',
      occupation: 'Web Developer',
      image: require('../../Assets/person4.png'),
    },
    {
      id: 7,
      name: 'John Doe',
      occupation: 'Software Engineer',
      image: require('../../Assets/person2.png'),
    },
    {
    id: 8,
    name: 'Caleb Curry',
    occupation: 'Travel Agent',
    image: require('../../Assets/person3.png'),
  },

    
  ];

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>Your partners</Text>

      <ScrollView>
        {data.map((item) => (
          <HorizontalCard
            key={item.id}
            name={item.name}
            occupation={item.occupation}
            image={item.image}
          />
        ))}
        <View style={styles.logout}>
      <Image source={require('../../Assets/logout.png')}/>
      <Pressable>
      <Text style={{color:'rgba(3, 115, 243, 1)'}}>  Logout</Text>
      </Pressable>
      </View>
      </ScrollView>

      
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  heading: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginVertical: 22,
    fontSize: 27,
    fontWeight: 'bold',
  },
  logout:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:'5%',
    marginVertical:'5%',
    alignItems:'center'

    
  }
});
