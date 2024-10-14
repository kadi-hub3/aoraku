import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { ResizeMode, Video } from "expo-av";
import { TouchableOpacity } from 'react-native';
import { icons } from '../constants';


const VideoCard = ({title, creator, avatar, thumbnail, video}) => {
    const [play, setPlay] = useState(false)
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
                    <Text className='font-psemibold text-sm text-white' numberOfLines={1}>
                        {title}
                    </Text>
                    <Text className='text-xs text-gray-200 font-pregular' numberOfLines={1}>
                        {creator}
                    </Text> 
                </View>
            </View>
            <View className='pt-2'>
                <Image source={icons.menu} className='w-5 h-5' resizeMode='contain' />
            </View>
        </View>
        {play ? (
            <Video
                source={{uri: video}}
                className='w-full h-60 rounded-xl'
                resizeMode={ResizeMode.CONTAIN}
                useNtiveControls
                shouldPlay
                onPlaybackStatusUpdate={(status)=> {
                    if (status.didJustFinish) {
                        setPlay(false)
                    }
                }}
            />
        ) : (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>setPlay(true)}
                className='w-full h-60 rounded-xl flex justify-center items-center'
            >
                <Image 
                    source={{uri: thumbnail}}
                    className='w-full h-full rounded-xl'
                    resizeMode='contain'
                />
                <Image
                    source={icons.play}
                    className='w-12 h-12 absolute'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        )}
    </View>
  )
}

export default VideoCard