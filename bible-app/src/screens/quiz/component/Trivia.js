import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import COLORS from '../../../consts/colors'

const Trivia = ({data, setTimeout, setQuestionNum, questionNum}) => {
  const [question, setQuestion] = React.useState(null);

  const options = ['A', 'B', 'C', 'D']

  React.useEffect(() => {
    setQuestion(data[questionNum - 1])
    console.log(data[questionNum - 1].answers);
  },[data, questionNum]);

  const dataList = data.answers;

  const Questions = ({questions}) => {
    console.log(questions);
    return(
      <View style={styles.answers}>
        <TouchableOpacity style={styles.answersText}>
          <Text></Text>
          <Text style={{color: COLORS.white, fontSize: 16, textAlign: 'center'}}>{questions.answer}</Text>
        </TouchableOpacity>
      </View>
      
    )
  }

  console.log(typeof data.answer + ' is a what now')

  return (
    <View style={styles.trivia}>

      <View style={styles.questions}>
        <Text style={{color: COLORS.red, width: 30, fontSize: 25, }}>{question?.id})</Text>
        <Text style={{color: COLORS.white, fontSize: 20}}>{question?.question}?</Text>
      </View>

      <FlatList data={question?.answers} renderItem={(questions) => <Questions questions={questions.item} />} />

    </View>
  )
}

const styles = StyleSheet.create({
  trivia: {
    backgroundColor: 'darkblue',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
    width: '100%',
    paddingVertical: 20
  },
  questions: {
    width: '100%',
    backgroundColor: COLORS.dark,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
    
  },
  answers: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  
  answersText: {
    backgroundColor: COLORS.dark,
    padding: 15,
    margin: 3,
    width: '85%',
    borderRadius: 5,
    textAlign: 'center',
    elevation: 5,
    borderBottomWidth: 4,
    borderBottomColor: 'white'
  },

  answerCorrect: {
    backgroundColor: 'teal'
  }
})
export default Trivia