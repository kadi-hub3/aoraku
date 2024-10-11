import { View, Text,FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import SearchField from '../../components/SearchField'
import EmptyState from '../../components/EmptyState'

const Home = () => {
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    //await refetch()
    setRefreshing(false)

  }

  useEffect(()=>{

  })
  
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item)=>item.$id}
        renderItem={({item})=> (
          // <VideoCard 
          // />
          item
        )}
        ListHeaderComponent={()=>(
          <View className='flex my-6 px-4'>
            <View className='flex justify-center items-center'>
              <View>
                <Text className='font-pmedium text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='font-psemibold text-white'>
                  Kadi
                </Text>
              </View>
              <View className=''>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-9'
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchField />
            <View className='w-full flex-1'>
              <Text className='text-lg font-pregular text-gray-100'>
                Latest Videos
              </Text>
              {/* <Trending posts={data} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='No videos created yet'
          />
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        // }
      />
    </SafeAreaView>
  )
}

export default Home