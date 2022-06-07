import { View, Text, FlatList,Button, StyleSheet,Dimensions, TouchableOpacity,  } from 'react-native'
import React from 'react';
import COLORS from '../../consts/colors';


const layout = Dimensions.get('screen')

const Money = ({money}) => {
  const [questionNumber, setQuestionNumber] = React.useState(13)
  return (
    <TouchableOpacity>
      <View style={styles.moneyContainer}>
        <View style={questionNumber == money.id ? [styles.moneyContainerList, styles.active] : styles.moneyContainerList}>
          <Text style={{color: COLORS.white}}>{money.id}</Text>
          <Text style={{color: COLORS.white}}>{money.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  moneyContainer: {
    backgroundColor: COLORS.transparent,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  moneyContainerList: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    width: '50%',
    paddingVertical: 10,
    marginBottom: 4,
    borderRadius: 4,
    elevation: 5,

  },

  active: {
    backgroundColor: 'teal'
  }
})

export default Money