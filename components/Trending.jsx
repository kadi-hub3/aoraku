import { FlatList } from 'react-native'
import { useState } from 'react'
import * as Animatable from "react-native-animatable";

const zoomIn = {
    0: {
        scale: 0.8
    },
    1: {
        scale: 1.1
    }
}
const zoomOut = {
    0: {
        scale: 1
    },
    1: {
        scale: 0.8
    }
}


const TrendingItem = ({activeItem, item}) => {
    const [play, setPlay] = useState(false)

    retrun (
        <Animatable.View
            animation={activeItem === item.$id? zoomIn : zoomOut}
            duration={500}
        >

        </Animatable.View>
    )

}
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