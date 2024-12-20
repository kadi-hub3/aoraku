import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import {Link, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import {FormField, CustomButton }from '../../components'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {
  const {setUser, setIsLogged} = useGlobalContext()
  const [isSubmitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit = async () => {
    if ( form.email === '' || form.password === ''){
      Alert.alert('Please fill in all the fields !')
    }
    setSubmitting(true)

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
   
      Alert.alert("Success", "User signed in successfully");
      setUser(result)
      console.log(result,'user')
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
              Log in to Aoraku
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
            />
            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />

            <View className='flex justify-center pt-5 flex-row gap-2'>
                <Text className='text-lg text-gray-100 font-pregular'>
                  Don't have an account ?
                </Text>
                <Link
                  href='/sign-up'
                  className='text-lg font-psemibold text-secondary'
                >
                  Sign up
                </Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn