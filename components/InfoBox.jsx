import { View, Text } from 'react-native'
import React from 'react'

const InfoBox = ({title, subtitle, titleStyles}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default InfoBox