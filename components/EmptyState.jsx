import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import { router } from 'expo-router'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className='flex justify-center items-center px-4'>
        <Image
            source={images.empty}
            resizeMode='contain'
            className='w-[250px] h-[250px]'
        />
        <Text className='text-sm font-pmedium text-gray-100'>
            {title}
        </Text>
        <Text className='text-xl text-center font-psemibold text-white'>
            {subtitle}
        </Text>
      <CustomButton
            title='Back to Explore'
            handlePress={()=>router.push('/home')}
            containerStyles='w-full my-5'
        />
    </View>
  )
}

export default EmptyState