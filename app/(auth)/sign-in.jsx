import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {Link} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4'>
            <Image 
              source={images.logo}
              resizeMode='contain'
              className='w-[115px] h-[35px]'
            />
            <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
              Log in to Aora
            </Text>
            <FormField
              title='Email'
              value={form.email}
              handleChange={(e)=> setForm({...form, email: e})}
              otherStyles='mt-5'
              keyboardType='email-address'
            />
            <FormField
              title='Password'
              value={form.password}
              handleChange={(e)=> setForm({...form, password: e})}
              otherStyles='mt-5'
              keyboardType='email-address'
            />
        </View>
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

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn