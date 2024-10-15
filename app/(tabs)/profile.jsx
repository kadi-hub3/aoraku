import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import {router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider'
import useAppwrite from '../../lib/useAppwrite'
import { signOut } from '@/lib/appwrite'

const Profile = () => {
  const { user, setUser, setIsLogged} = useGlobalContext()
  const { data: posts} = useAppwrite(()=> getUserPosts(user.$id))

  const logOut = async() => {
    await signOut()
    setUser(null)
    setIsLogged(false)
    router.replace('/sign-in')
  }
  
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
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
            {/* <SearchField /> */}
            <View className='w-full flex-1'>
              <Text className='text-lg font-pregular text-gray-100'>
                Latest Videos
              </Text>
              {/* <Trending posts={latestPosts ?? []} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='No videos found for this profile'
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
      />
    </SafeAreaView>
  )
}

export default Profile