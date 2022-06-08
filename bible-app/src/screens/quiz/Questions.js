import { View, Text, FlatList,Button, StyleSheet,Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import Trivia from './component/Trivia'
import quizData from './data'
import Timer from './component/Timer'

const Questions = ({setIsTrue}) => {
  const [stop, setStop] = React.useState(false);
  const [questionNum, setQuestionNum] = React.useState(1)

  return (
    <View style={styles.questionsContainer}>
      <View style={styles.top}>
        <View style={styles.timer}>
          <Text style={{color: COLORS.white, fontSize: 25}}><Timer /></Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Trivia setIsTrue={setIsTrue} data={quizData} setQuestionNum={setQuestionNum} questionNum={questionNum} setStop={setStop}/>
      </View>
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
  }
})

export default Questions