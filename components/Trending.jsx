import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

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