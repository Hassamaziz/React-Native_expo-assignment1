import React from 'react';
import AuthHeader from '../../Components/AuthHeader/AuthHeader'
import Input from '../../Components/InputFields/InputFields';
import {View, Image, Text,ScrollView, StyleSheet} from 'react-native';

import Filterbtn from '../../Components/FilterButton/Filterbtn';
import ImageCard from '../../Components/Card/Card';

export default function  Home() {
  
    return (
        <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15,marginTop:'10%'}}>
        <AuthHeader para="Find your next trip" title="Nordic scenery" />
      </View>

      <View style={styles.SearchView}>
        <View style={{width: '85%'}}>
          <Input
            inputImg={require('../../Assets/search.png')}
            placeHolder="Search..."
          />
        </View>
        <View style={{marginEnd: 10}}>
          <Filterbtn img={require('../../Assets/filter.png')} />
        </View>
      </View>

      <View style={styles.container}>
      <Text style={{width: 160,height: 27,fontWeight:'700',marginHorizontal:15,fontSize:17
}}>Popular Locations</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <ImageCard title="Switzerland" secondtitle="from $699" img={require('../../Assets/mountain.png')} />
        </View>
        <View style={styles.cardContainer}>
          <ImageCard title="Ilulissat Icefjord" secondtitle="from $725" img={require('../../Assets/mountain2.png')} />
        </View>
      </ScrollView>
    </View>

    {/* Second Card*/}
    
    <View style={styles.container2}>
      <Text style={{width: 160,height: 27,fontWeight:'700',marginHorizontal:15,fontSize:17
}}>Popular Locations</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View  style={styles.cardContainer2}>
          <ImageCard title="Western Strait" secondtitle="16 locations" img={require('../../Assets/western.png')} />
        </View>
        <View style={styles.cardContainer2}>
          <ImageCard title="Beach House" secondtitle="22 locations" img={require('../../Assets/beachhouse.png')} />
        </View>
        <View style={styles.cardContainer2}>
          <ImageCard title="Mountain range" secondtitle="36 locations" img={require('../../Assets/mountain2.png')} />
        </View>
       
      </ScrollView>
    </View>

   
    </View>
   
    );
  }

  const styles = StyleSheet.create({
  
  SearchView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:'-10%'
  },
  container: {
    flex:1.5,
    marginHorizontal: '3%',
    marginTop:'-3%'

  },
  container2: {
    flex:2,
    marginHorizontal: '3%',
    marginTop:20

  },
  cardContainer: {
    flex: 1,
    width:250,
    marginRight: 10,
    height:150
  },
  cardContainer2: {
    textAlign:'center',
    flex: 2,
    width:140,
    marginRight: 15,
    height:200

  },
});