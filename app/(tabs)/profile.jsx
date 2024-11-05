import { View, FlatList, Image, TouchableOpacity } from 'react-native'
import {router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider'
import useAppwrite from '../../lib/useAppwrite'
import { getUserPosts, signOut } from '@/lib/appwrite'
import { icons } from '@/constants'
import { EmptyState, VideoCard, SearchField, InfoBox} from '../../components'

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
    <SafeAreaView className='h-full bg-primary'>
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
          <View className='flex justify-center items-center my-6 px-4'>
            <TouchableOpacity
              onPress={logOut}
              className='flex w-full items-end'
            >
              <Image 
                source={icons.logout}
                resizemode='contain'
                className='w-6 h-6'
              />
            </TouchableOpacity>
            <View className='w-16 h-16 border border-secondary rounded-lg'>
              <Image
                source={{uri : user?.avatar}}
                className='w-full h-full rounded-lg'
                resizeMode='cover'
              />
            </View>
            {/* <InfoBox/> */}
            <View className='flex flex-row space-x-4 mt-5'>
              <InfoBox
                title={posts.length || 0}
                subtitle='Posts'
                titleStyles='text-xl'
                containerStyles='mr-10'
              />
              <InfoBox
                title='1.5k'
                subtitle='Followers'
                titleStyles='text-xl'
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='No videos found for this profile'
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Profile