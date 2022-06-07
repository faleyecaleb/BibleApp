import { View, Text, FlatList,Button, StyleSheet,Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import Trivia from './component/Trivia'
import quizData from './data'

const Questions = () => {
  const [timeout, setTimeout] = React.useState(false);
  const [questionNum, setQuestionNum] = React.useState(1)

  return (
    <View style={styles.questionsContainer}>
      <View style={styles.top}>
        <View style={styles.timer}>
          <Text style={{color: COLORS.white, fontSize: 22}}>30</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Trivia data={quizData} setQuestionNum={setQuestionNum} questionNum={questionNum} setTimeout={setTimeout}/>
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
    borderRadius: '50%', 
    borderWidth: 1, 
    borderColor: COLORS.white, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 50,
  },

  bottom: {
    height: '50%'
  }
})

export default Questions