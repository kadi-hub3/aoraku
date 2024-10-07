import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { images } from '@/constants'

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='h-full'>
        <View className='w-full flex justify-center items-center h-full px-4'>
          <Image 
            source={images.logo}
            className='w-[130px] h-[85px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className='w-[400px] h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
           <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App