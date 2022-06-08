import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1)
    }, 1000)

    return () => (
      clearInterval(interval)
    )
  })
  return timer
}

export default Timer