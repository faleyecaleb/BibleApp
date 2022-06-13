import { View, Text, SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, StatusBar, FlatList , Button} from 'react-native'
import React, {useEffect} from 'react'
import Money from './component/QuizResult'
import COLORS from '../../consts/colors';
import Questions from './Questions';
import { checkConnected } from '../../../network';

import { AdMobRewarded, AdMobBanner } from 'expo-ads-admob';


const height = Dimensions.get('screen').height;

  const money = [
    {id: 1, amount: '$ 100'},
    {id: 2, amount: '$ 200'},
    {id: 3, amount: '$ 300'},
    {id: 4, amount: '$ 500'},
    {id: 5, amount: '$ 1000'},
    {id: 6, amount: '$ 2000'},
    {id: 7, amount: '$ 4000'},
    {id: 8, amount: '$ 8000'},
    {id: 9, amount: '$ 16000'},
    {id: 10, amount: '$ 32000'},
    {id: 11, amount: '$ 64000'},
    {id: 12, amount: '$ 125000'},
    {id: 13, amount: '$ 250000'},
    {id: 14, amount: '$ 500000'},
    {id: 15, amount: '$ 1000000'},
  ].reverse()

const Quiz = ({navigation}) => {
  const img = require('../../assets/images/quizImg.jpg');
  const [toStartQuiz, setToStartQuiz] = React.useState(false)
  const [connectStatus, setConnectStatus] = React.useState(false);

  checkConnected().then(res => {
    setConnectStatus(res)
  })


  const handleQuiz = async () => {
    if (connectStatus) {
      navigation.navigate('Quiz');
    } else{
      alert('Oops...Check You Connection')
    }
    

  }
  

  const loadAds = async () => {
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    try {
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.log(error);
    }
  }

  const startQuiz = async () => {
    if (connectStatus) {
      await loadAds()
      setToStartQuiz(true);
    } else{
      alert('Oops...Check You Connection')
    }
    
  }
  return (
    <SafeAreaView style={{position:'relative'}}>
      <StatusBar animated={true} backgroundColor={COLORS.dark} barStyle={'light-content'} />
      <ImageBackground resizeMode='cover' style={styles.backgrounImage} source={img}>
      <View style={{
        shadowOffset: {width: 5, height: 5},
        borderRadius: 5,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 4,
      
      }}>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)} />
      </View> 

        
        
        {toStartQuiz && <View style={{height: '100%'}} >
          <Questions navigation={navigation} />
        </View>}
    
      {
        !toStartQuiz && 
        <View style={styles.card}>
        <Button title='Start Quiz' onPress={startQuiz} />
      </View>
      }
     

        
        
        
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgrounImage: {
    height: height
  },

  cardContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  card:{
    backgroundColor: 'white',
    padding: 25,
    position: 'absolute',
    top: height * 0.5,
    elevation: 10,
    borderRadius: 10,
    color: COLORS.dark,
    fontSize: 20,
    alignSelf: 'center'
  },
})

export default Quiz