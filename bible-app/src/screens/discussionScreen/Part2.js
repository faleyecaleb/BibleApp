import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react';
import BOOKPAGE from '../../bookData/book';
import { UserContext } from './UserContext';
import { AdMobBanner } from 'expo-ads-admob';


const Part2 = () => {
  const msg = useContext(UserContext)

  const books = BOOKPAGE;
  const layout = useWindowDimensions()

  if (msg.partTwo === 'undefined') {
    return (
      <Text>This Lesson Has No Part Two...d</Text>
    )
  }

  return (
    <View>
      {msg.partTwo || msg.partTwo === 'undefined' ?

        <ScrollView style={{ paddingHorizontal: 25 }}>

          <Text selectable={true} style={{ fontSize: 16, textAlign: 'left', lineHeight: 27, paddingBottom: 50, marginBottom: 100 }}>{msg.partTwo.content}</Text>
        </ScrollView>

        :

        <ScrollView style={style.text}>
          <Text selectable={true} style={{ fontSize: 16, textAlign: 'left', lineHeight: 35, paddingBottom: 50, marginBottom: 100 }}>{msg.content}</Text>
        </ScrollView>
      }

      <View style={{
        shadowOffset: { width: 5, height: 5 },
        borderRadius: 5,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 4,

      }}>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3102229267647171/3370562277" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />
      </View>
    </View>
  )


}

const style = StyleSheet.create({
  text: {
    paddingHorizontal: 25


  }
})

export default Part2