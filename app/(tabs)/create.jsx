import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'

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
    <View>
      <Text>Create</Text>
    </View>
  )
}

export default Create