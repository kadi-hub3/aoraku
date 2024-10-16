import { View, Text,FlatList, Image, RefreshControl } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import {SearchField, EmptyState, VideoCard, Trending} from '../../components'
import useAppwrite from '../../lib/useAppwrite'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'

const Home = () => {
  const {data: posts, refetch} = useAppwrite(getAllPosts)
  const {data: latestPosts} = useAppwrite(getLatestPosts)
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
            {/* <SearchField /> */}
            <View className='w-full flex-1'>
              <Text className='text-lg font-pregular text-gray-100'>
                Latest Videos
              </Text>
              <Trending posts={latestPosts ?? []} />
            </View>
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

export default Home