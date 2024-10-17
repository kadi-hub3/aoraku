import { View, Text } from 'react-native'
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

  
  return (
    <View>
      <Text>Create</Text>
    </View>
  )
}

export default Create