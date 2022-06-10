import { View, Text, Button, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'


const QuizResult = ({setStop, score,totalScore, navigation}) => {


  const tryAgain = () => {
    setStop(false)
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <Text style={{fontSize: 20,color: 'white', fontWeight: 'bold'}}>Quiz Finished!!!</Text>
          <Text style={{color: 'white'}}>Number of Questions Answered: {score}</Text>
          <Text style={{color: 'white'}}>You Got {(score/totalScore) * 100}% Correctly</Text>
        </View>

        <View style={styles.button}>
          <Button title='Try Again' onPress={tryAgain}/>
          <Button title='End Quiz' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'indigo',
    padding: 20,
    margin: '20%',
    elevation: 10,
  },
  containerResult:{

    alignItems: 'center',
    paddingVertical: 20,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  }
})

export default QuizResult