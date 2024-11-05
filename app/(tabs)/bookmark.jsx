import { View, Text,FlatList, Image, RefreshControl } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import {SearchField, EmptyState, VideoCard, Trending} from '../../components'
import useAppwrite from '../../lib/useAppwrite'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'

const Bookmark = () => {
  const {data: posts, refetch} = useAppwrite(getAllPosts)
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async() => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
    <FlatList
      data={posts}
      keyExtractor={(item)=>item.$id}
      renderItem={({item})=> (
        <VideoCard
          title={item.title}
          thumbnail={item.thumbnail}
          video={item.video}
          creator={item.creator.username}
          avatar={item.creator.avatar}
        />
      )}
      ListHeaderComponent={()=>(
        <View className='flex my-6 px-4'>
          <View className='flex justify-between items-start flex-row mb-5'>
            <View>
              <Text className='font-psemibold text-xl text-white'>
                Saved Videos
              </Text>
            </View>
          </View>
          <SearchField />
        </View>
      )}
      ListEmptyComponent={() => (
        <EmptyState
          title='No Videos Found'
          subtitle='No videos created yet'
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }
    />
  </SafeAreaView>
  )
}

export default Bookmark