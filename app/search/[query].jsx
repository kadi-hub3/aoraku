import { useLocalSearchParams } from 'expo-router'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAppwrite from '../../lib/useAppwrite'
import { useEffect } from 'react'

const SearchQuery = () => {
    const {query} = useLocalSearchParams()
    //const {data: posts, refetch} = useAppwrite(()=>getCurrentUser(query))

    useEffect(()=> {
        refetch()
    }, [query])

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
                <Text className='font-pmedium text-gray-100'>
                    Search Results                
                </Text>
                <Text className='font-psemibold text-white'>
                  Kadi
                </Text>
              <View className=''>
                    {/* <SearchField /> */}

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