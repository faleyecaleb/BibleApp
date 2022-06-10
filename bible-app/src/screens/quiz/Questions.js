import { View, Text, FlatList,Button, StyleSheet,Dimensions, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/colors'
import Trivia from './component/Trivia'
import quizData from './data'
import Timer from './component/Timer';
import QuizResult from './component/QuizResult'
import PopUp from './component/Modal'

const Questions = ({setIsTrue,navigation}) => {
  const [stop, setStop] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  // const [tryAgain, setTryAgain] = useState(false);
  const [score, setScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)

  return (
    <View style={styles.questionsContainer}>
      {
        stop ? <QuizResult setQuestionNum={setQuestionNum} questionNum={questionNum} setStop={setStop} navigation={navigation} totalScore={totalScore} score={score}   />
        :
        <View>

         
          <View>
            <View style={styles.top}>
              <View style={styles.timer}>
                <Text style={{color: COLORS.white, fontSize: 25}}><Timer setStop={setStop} questionNum={questionNum} setQuestionNum={setQuestionNum} /></Text>
              </View>
          </View>
          <View style={styles.bottom}>
            <Trivia totalScore={totalScore} setTotalScore={setTotalScore} setScore={setScore} data={quizData} setQuestionNum={setQuestionNum} questionNum={questionNum} setStop={setStop} />
          </View>
            </View>
          

        </View>

        
      }
        
      
    </View>
  )
}

const styles = StyleSheet.create({
  questionsContainer: {
    flex: 1
  },
  top: {
    height: '50%',
    position: 'relative'
  },

  timer:{
    width: 70, 
    height:70, 
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: COLORS.white, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    left: 10

  },

  bottom: {
    height: '50%',
    backgroundColor: COLORS.white
  },

  tryAgainContainer:{
    backgroundColor: COLORS.white,
    padding: 10,

  }
})

export default Questions