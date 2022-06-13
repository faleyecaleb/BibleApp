import { View, Text, ScrollView, StyleSheet, Dimensions, Button, useWindowDimensions, TouchableHighlight } from 'react-native'
import React, {useContext} from 'react';
import BOOKPAGE from '../../bookData/book';
import { myBooks } from './Discussions';
import { UserContext } from './UserContext';
import {
  AdMobBanner,
} from 'expo-ads-admob';


const height = Dimensions.get('window').height


const Part1 = () => {
  const msg = useContext(UserContext)
  const books = BOOKPAGE;
  const layout = useWindowDimensions();

  

  
  return (
    <View style={{height: '100%'}}>
      {msg.partOne? 
        <ScrollView style={{paddingHorizontal: 25}}>
          <Text>{msg.partOne.name}</Text>
        
        <Text selectable={true} style={{fontSize: 18, textAlign: 'left', lineHeight: 27, paddingBottom: 50,marginBottom: 100}}>{msg.partOne.content}</Text>
      </ScrollView>

      :

      <ScrollView style={style.text}>
        <Text selectable={true} style={{fontSize: 16, textAlign: 'left', lineHeight: 35, paddingBottom: 50, marginBottom: 100}}>{msg.content}</Text>   
      </ScrollView>
      }
      <View style={{
        shadowOffset: {width: 5, height: 5},
        borderRadius: 5,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 4,
      
      }}>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)} />
      </View>
     
    </View>
  )


}

const style = StyleSheet.create({
  text: {
    paddingHorizontal: 25

    
  },

})



export default Part1