import { View, Text, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react';
import BOOKPAGE from '../../bookData/book'

const Part1 = () => {
  const books = BOOKPAGE;
  const layout = useWindowDimensions()
  
  return (
    <View>
      {
        books.map((book) => (
          <ScrollView style={{paddingHorizontal: 8}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5,}}>{book.discussion.partOne.name}</Text>
            <Text style={{fontSize: 16, textAlign: 'left', lineHeight: 27, paddingBottom: 50}}>{book.discussion.partOne.content}</Text>
          </ScrollView>
        ))
      }
    </View>
  )
}

export default Part1