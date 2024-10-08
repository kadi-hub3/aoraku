import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const FormField = ({title, value, placeholder, handleChange, otherStyles}) => {
  return (
    <View className='space-y-2'>
      <Text className={`text-gray-100 font-pmedium ${otherStyles}`}>
        {title}
      </Text>
      <View className='border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-100 items-center'>
        <TextInput  
            className='flex-1 text-white font-psemibold text-base'
            value={value}
            placeholder={placeholder}
            onChangeText={handleChange}
            secureTextEntry
        />
      </View>
    </View>
  )
}

export default FormField