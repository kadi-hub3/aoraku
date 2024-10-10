import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const SearchField = () => {
  return (
    <View className='space-y-2'>
      <Text className={`text-gray-100 font-pmedium ${otherStyles}`}>
        {title}
      </Text>
      <View className='border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-100 flex flex-row items-center'>
        <TextInput  
            className='flex-1 text-white font-psemibold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="gray"
            onChangeText={handleChange}
            secureTextEntry={title==='Password' && !showPassword}
        />
     
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={icons.search}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
      

      </View>
    </View>
  )
}

export default SearchField