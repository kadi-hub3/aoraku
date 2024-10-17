import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { FormField } from '@/components'

const Create = () => {
  const {user} = useGlobalContext()
  const [uploading, setUploading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: ''
  })

  const submit = () => {
    if((form.prompt === '')|(form.title === '') | !form.thumbnail | !form.video) {
      return Alert.alert('Please provide all fields')
    }

    setUploading(true)

    try {

    } catch (error) {
      Alert.alert('Video Creation Error', error)
    } finally {
        setForm({
          title: '',
          video: null,
          thumbnail: null,
          prompt: '',
        });

        setUploading(false);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Upload Video</Text>
        <FormField 
          title='Video Title'
          value={form.title}
          placeholder='Give your video a catchy title...'
          handleChangeText={(e)=>setForm({...form, title: e})}
        />
        <View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create