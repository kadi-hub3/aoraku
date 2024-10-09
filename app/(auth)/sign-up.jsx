import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import {Link, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const submit = async () => {
    if (form.username === '' || form.email === '' || form.password === ''){
      Alert.alert('Please fill inn all the fields !')
    }
    setSubmitting(true)

    try {
      const result = await createUser(form.email, form.password, form.username)
      setUser(result)
      setIsLogged(true)
      router.replace('/home')
    } catch(error) {
      Alert.alert('Error', error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full flex justify-center h-full px-4'>
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
              value={form.username}
              handleChange={(e)=> setForm({...form, username: e})}
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
              title="Sign Up"
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