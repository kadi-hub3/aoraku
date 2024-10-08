import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {Link} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite'
const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const submit = () => {
    createUser()
  }

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
              title='Username'
              value={form.email}
              handleChange={(e)=> setForm({...form, ussername: e})}
              otherStyles='mt-5'
            />
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
            />
            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />

            <View className='flex justify-center pt-5 flex-row gap-2'>
                <Text className='text-lg text-gray-100 font-pregular'>
                  Have an account already ?
                </Text>
                <Link
                  href='/sign-in'
                  className='text-lg font-psemibold text-secondary'
                >
                  Sign In
                </Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp