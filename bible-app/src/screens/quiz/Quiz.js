import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Dimensions, StatusBar, FlatList , Button} from 'react-native'
import React from 'react'
import Money from './Money'
import COLORS from '../../consts/colors';
import Questions from './Questions';


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

const Quiz = () => {
  const img = require('../../assets/images/quizImg.jpg');
  const [isTrue, setIsTrue] = React.useState(false)
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor={COLORS.dark} barStyle={'light-content'} />
      <ImageBackground resizeMode='cover' style={styles.backgrounImage} source={img}>
        
        <View style={{height: '100%'}} >
        {
          isTrue ? 
          <FlatList data={money} renderItem={(item) => <Money money={item.item} check={isTrue} setIsTrue={setIsTrue} />} />
          :
          <Questions />
        }
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgrounImage: {
    height: height
  }
})

export default Quiz