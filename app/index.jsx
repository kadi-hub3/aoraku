import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import  CustomButton from '@/components/CustomButton'
const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='h-full'>
        <View className='w-full flex justify-center items-center min-h-[85vh] px-4'>
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
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora.
          </Text>
          <CustomButton
            title='Continue with Email'
            handlePress={()=>router.push('/sign-in')}
            containerStyles='w-full mt-5'
          />
          
        </View>
      </ScrollView>
      <StatusBar style='light' />
    </SafeAreaView>
  )
}

export default App