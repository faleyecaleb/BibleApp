import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import {
  AdMobBanner,
} from 'expo-ads-admob';
// import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';


const Part1 = () => {
  const msg = useContext(UserContext);
  const [introduction, setIntroduction] = useState(false);
  const adUnits = { realId: "ca-app-pub-3102229267647171/3370562277", testId: "ca-app-pub-3940256099942544/6300978111" }


  useEffect(() => {

    switch (msg.name) {
      case 'Introduction':
        console.log('Introduction');
        setIntroduction(true)
        break;
      // case 'Discussion':
      //   console.log('Discussion');
      //   setDiscussion(true)
      //   break;
      // case 'Conclusion':
      //   console.log('Conclusion');
      //   setConclusion(true)
      //   break;
      // case 'Prayer Points':
      //   console.log('Prayer Points');
      //   setPrayerPoints(true)
      //   break;


    }
  }, [msg.name])

  // const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';


  return (
    <View style={{ height: '100%' }}>
      {msg.partOne ?
        <ScrollView style={{ paddingHorizontal: 25 }}>
          <Text selectable>{msg.partOne.name}</Text>

          <Text selectable style={{ fontSize: 18, textAlign: 'left', lineHeight: 27, paddingBottom: 50, marginBottom: 100 }}>{msg.partOne.content}</Text>
        </ScrollView>

        :

        <ScrollView style={style.text}>
          {introduction &&
            <View>
              <Text selectable style={{ fontSize: 16, textTransform: 'uppercase', textAlign: 'left', fontWeight: '900' }}>{msg.memory_verse.name}:</Text>

              <Text selectable style={{ fontSize: 16, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 20, textAlign: 'left', lineHeight: 25, fontWeight: '600' }}>{msg.memory_verse.content}</Text>
            </View>}
          {/* {introduction && <Text style={{ fontSize: 28, color: 'red' }}>Introduction</Text>} */}
          <Text selectable style={{ fontSize: 16, fontWeight: '300', textAlign: 'left', lineHeight: 35, paddingBottom: 50, marginBottom: 100 }}>{msg.content}</Text>

        </ScrollView>
      }
      <AdMobBanner
        style={{
          position: 'absolute',
          bottom: 0,
        }}
        bannerSize="fullBanner"
        adUnitID={adUnits.testId} // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={true} // true or false
      />

      {/* <View style={{
        position: 'absolute',
        bottom: 0,
      }}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View> */}


    </View>
  )


}

const style = StyleSheet.create({
  text: {
    paddingHorizontal: 25


  },

})



export default Part1