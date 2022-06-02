import { View, Text, ScrollView, StyleSheet, Button, useWindowDimensions, TouchableHighlight } from 'react-native'
import React, {useContext} from 'react';
import BOOKPAGE from '../../bookData/book';
import { myBooks } from './Discussions';
import { UserContext } from './UserContext';
import * as Speech from 'expo-speech';



const Part1 = () => {
  const msg = useContext(UserContext)
  
  const books = BOOKPAGE;
  const layout = useWindowDimensions()

  const handleClick = (text) => {
    Speech.speak(text)
  }
  
  return (
    <View>
      {msg.partOne? 
        <ScrollView style={{paddingHorizontal: 25}}>
          <Text>{msg.partOne.name}</Text>
        
        <Text selectable={true} style={{fontSize: 16, textAlign: 'left', lineHeight: 27, paddingBottom: 50}}>{msg.partOne.content}</Text>
      </ScrollView>

      :

      <ScrollView style={style.text}>
        <Button title='Submit' color={'red'} onPress={() => handleClick('Life is good')} />
        <Text selectable={true} style={{fontSize: 16, textAlign: 'left', lineHeight: 35, paddingBottom: 50}}>{msg.content}</Text>
      </ScrollView>
      } 
    </View>
  )


}

const style = StyleSheet.create({
  text: {
    paddingHorizontal: 25

    
  }
})



export default Part1