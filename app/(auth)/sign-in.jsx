import { View, Text } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <View className='flex justify-center pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account ?
            </Text>
            <Link
              href='/sign-up'
              className='text-lg font-psemibold text-secondary'
            >
              Signup
            </Link>
          </View>
    </View>
  )
}

export default SignIn