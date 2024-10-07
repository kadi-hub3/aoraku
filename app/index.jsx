import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const App = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text className='text-3xl font-pblack'>App heyyy</Text>
      <Link href='/home'> go home</Link>
    </SafeAreaView>
  )
}

export default App