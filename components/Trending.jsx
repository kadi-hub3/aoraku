import { View, Text, FlatList } from 'react-native'
import { useState } from 'react'

const Trending = ({posts}) => {
    const [activeItem, setActiveItem] = useState(posts[0])

    const viewableItemsChanged = ({viewableItems}) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].keys)
        }
    }
  return (
    <FlatList
        data={posts}
        horizontal
        keyExtractor={(item)=>item.$id}
        renderItem={(item)=> (
            item
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{x: 170}}
    />
  )
}

export default Trending