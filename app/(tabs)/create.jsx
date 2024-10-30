import { View, Text, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { FormField } from '@/components'
import { createVideoPost } from '@/lib/appwrite'
import { ResizeMode, Video } from 'expo-av'
import { icons } from '@/constants'

const Create = () => {
  const {user} = useGlobalContext()
  const [uploading, setUploading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: ''
  })

  const openPicker = async(selectType) => {

  }
 
  const submit = async() => {
    if((form.prompt === '')|(form.title === '') | !form.thumbnail | !form.video) {
      return Alert.alert('Please provide all fields')
    }

    setUploading(true)

    try {
      await createVideoPost({
        ...form,
        userId: user.$id
      })
      Alert.alert("Success", "Post uploaded successfully");
      router.push('/home')
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
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <Text>Upload Video</Text>
        <FormField 
          title='Video Title'
          value={form.title}
          placeholder='Give your video a catchy title...'
          handleChangeText={(e)=>setForm({...form, title: e})}
        />
        <View>
          <Text className='text-base text-gray-100'>
            Upload Video
          </Text>
          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{uri: form.video.uri}}
                className='w-full h-64 rounded-2xl'
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className='w-full h-40 bg-black-100'>
                <View>
                  <Image
                    source={icons.upload}
                    className='w-1/2 h-1/2'
                    resizeMode='contain'
                    alt='upload'
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text className='text-base text-gray-100'>
            Thumbnail Image
          </Text>
          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.thumbnail ? (
                <Image
                  source={{uri: form.thumbnail.uri}}
                  resizeMode='cover'
                  className='w-full h-64 rounded-2xl'
                />
            ) : (
                <View>
                  <Image
                    source={icons.upload}
                    resizeMode='contain'
                    alt='upload'
                    className='w-5 h-5'
                  />
                  <Text>Choose a file</Text>
                </View>
            )}
          </TouchableOpacity>
        </View>
        <FormField
          title="AI Prompt"
          value={form.prompt}
          placeholder="The AI prompt of your video...."
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="Submit & Publish"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create