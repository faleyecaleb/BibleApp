import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useContext} from 'react';
import BOOKPAGE from '../../bookData/book';
import { myBooks } from './Discussions';
import { UserContext } from './UserContext';


const Part1 = () => {
  const msg = useContext(UserContext)
  
  const books = BOOKPAGE;
  const layout = useWindowDimensions()
  
  return (
    <View>
      {msg.partOne ? 
        <ScrollView style={{paddingHorizontal: 8}}>
        
        <Text selectable={true} style={{fontSize: 16, textAlign: 'left', lineHeight: 27, paddingBottom: 50}}>{msg.partOne.content}</Text>
      </ScrollView>

      :

      <ScrollView style={style.text}>
        <Text selectable={true} style={{fontSize: 16, textAlign: 'left', lineHeight: 35, paddingBottom: 50}}>{msg.content}</Text>
      </ScrollView>
      } 
    </View>
  )


}

const style = StyleSheet.create({
  text: {
    paddingHorizontal: 10,

    
  }
})



export default Part1