import { View, Text, ScrollView, StyleSheet, Dimensions, Button, useWindowDimensions, TouchableHighlight } from 'react-native'
import React, {useContext} from 'react';
import BOOKPAGE from '../../bookData/book';
import { myBooks } from './Discussions';
import { UserContext } from './UserContext';
import {
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
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
      <AdMobBanner style={{position: 'absolute', top: '91%'}}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          /> 
    </View>
  )


}

const style = StyleSheet.create({
  text: {
    paddingHorizontal: 25

    
  },

})



export default Part1