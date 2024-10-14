import { View, Text, Image } from 'react-native'
import React from 'react'

const VideoCard = ({title, creator, avatar, thumbnail, video}) => {
  return (
    <View className='flex flex-col items-center px-4'>
        <View className='flex flex-row gap-3 items-start'>
            <View className='flex flex-row justify-center items-center'>
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center'>
                    <Image
                        source={{uri: avatar}}
                        className='w-full h-fu;; rounded-lg'
                        resizeMode='contain'
                    />
                </View>
                <View className='flex justify-center flex-1'>
                    <Text className='font-psemibold text-sm text-white'>
                        {title}
                    </Text>
                    <Text className='text-xs text-gray-200 font-pregular'>
                        {creator}
                    </Text> 
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default VideoCard