import { View, Text, Button, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'


const QuizResult = ({setStop,setScore, setQuestionNum, setTotalScore, score,totalScore, navigation}) => {


  const tryAgain = () => {
    setQuestionNum(1)
    setStop(false)
    setScore(0)
    setTotalScore(0)
  }

  const endQuiz = () => {
    navigation.popToTop()
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <Text style={{fontSize: 20,color: 'white', fontWeight: 'bold', marginBottom: 20}}>Quiz Finished!!!</Text>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>TOTAL QUESTIONS: {totalScore}</Text>
          <Text style={{color: 'white'}}>You Got {score} out of {totalScore} Correctly</Text>
        </View>

        <View style={styles.button}>
          <Button title='Try Again' onPress={tryAgain}/>
          <Button title='End Quiz' onPress={endQuiz} />
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