import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useContext} from 'react';
import BOOKPAGE from '../../bookData/book';
import { myBooks } from './Discussions';
import { UserContext } from './UserContext';


const Part2 = () => {
  const msg = useContext(UserContext)
  
  const books = BOOKPAGE;
  const layout = useWindowDimensions()

  if(msg.partTwo === 'undefined') {
    return(
      <Text>This Lesson Has No Part Two...d</Text>
    )
  }
  
    return (
      <View>
        {msg.partTwo || msg.partTwo === 'undefined' ? 
          
          <ScrollView style={{paddingHorizontal: 25}}>
          
          <Text selectable={true} style={{fontSize: 16, textAlign: 'left', lineHeight: 27, paddingBottom: 50}}>{msg.partTwo.content}</Text>
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
    paddingHorizontal: 25

    
  }
})

export default Part2