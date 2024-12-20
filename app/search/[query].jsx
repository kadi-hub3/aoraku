import { useLocalSearchParams } from 'expo-router'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAppwrite from '../../lib/useAppwrite'
import { useEffect } from 'react'
import { searchPosts } from '../../lib/appwrite'
import { EmptyState, VideoCard, SearchField} from '../../components'

const SearchQuery = () => {
    const {query} = useLocalSearchParams()
    const {data: posts, refetch} = useAppwrite(()=>searchPosts(query))

    useEffect(()=> {
        refetch()
    }, [query])

  return (
    <SafeAreaView>
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
                <Text className='font-pmedium text-gray-100'>
                    Search Results                
                </Text>
                <Text className='font-psemibold text-white'>
                  {query}
                </Text>
              <View className=''>
                <SearchField initialQuery={query} refetch={refetch} />
              </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='No videos found for this search query'
          />
        )}
    
      />
    </SafeAreaView>
  )
}

export default SearchQuery