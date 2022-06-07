import { View, Text } from 'react-native'
import React from 'react'

const Money = () => {
  const money = [
    {id: 1, amount: '$ 100'},
    {id: 2, amount: '$ 200'},
    {id: 3, amount: '$ 300'},
    {id: 4, amount: '$ 500'},
    {id: 5, amount: '$ 1000'},
    {id: 6, amount: '$ 2000'},
    {id: 7, amount: '$ 4000'},
    {id: 8, amount: '$ 8000'},
    {id: 1, amount: '$ 16000'},
    {id: 1, amount: '$ 32000'},
    {id: 1, amount: '$ 64000'},
    {id: 1, amount: '$ 125000'},
    {id: 1, amount: '$ 250000'},
    {id: 1, amount: '$ 500000'},
    {id: 1, amount: '$ 1000000'},
  ]
  return (
    <View>
      <Text>Money</Text>
    </View>
  )
}

export default Money