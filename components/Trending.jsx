import { FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { useState } from 'react'
import * as Animatable from "react-native-animatable";
import { icons } from '@/constants';
import { Video, ResizeMode } from 'expo-av';

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

    return (
        <Animatable.View
            animation={activeItem === item.$id? zoomIn : zoomOut}
            duration={500}
        >
        {play ? (
            <Video
                source={{uri: item.video}}
                className='w-52 h-60 rounded-[33px] mt-3 bg-white '
                resizeMode={ResizeMode.CONTAIN}
                useNativeControls
                shouldPlay
                onPlaybackStatusUpdate={(status)=> {
                    if (status.didJustFinish) {
                        setPlay(false)
                    }
                }}
            />
        ) : (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>setPlay(true)}
                className='relative flex justify-center items-center'
            >
                <ImageBackground
                    source={{uri: item.thumbnail}}
                    className='w-52 h-72 rounded-[33px] mt-3 overflow-hidden shadow-lg'
                    resizeMode='cover'
                />
                <Image
                    source={icons.play}
                    className='w-12 h-12 absolute'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        )}
        </Animatable.View>
    )

}
const Trending = ({posts}) => {
    const [activeItem, setActiveItem] = useState(posts[0])

    const viewableItemsChanged = ({viewableItems}) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key)
        }
    }
  return (
    <FlatList
        data={posts}
        horizontal
        keyExtractor={(item)=>item.$id}
        renderItem={({item})=> (
            <TrendingItem activeItem={activeItem} item={item} />
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