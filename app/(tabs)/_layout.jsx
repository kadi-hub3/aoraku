import { Tabs } from 'expo-router';
import {Image, View} from 'react-native';
import { icons } from "../../constants";
import { StatusBar } from "expo-status-bar";


const TabIcon = ({ icon, color }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarShowLabel: true,
            tabBarStyle: {
              backgroundColor: "#161622",
              borderTopWidth: 1,
              borderTopColor: "#232533",
              height: 78,
            },
          }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name='Home' icon={icons.home} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name='Bookmark' icon={icons.bookmark} color={color}  focused={focused}/>
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name='Create' icon={icons.plus} color={color}  focused={focused}/>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name='Profile' icon={icons.profile} color={color}  focused={focused}/>
            ),
          }}
        />
      </Tabs>
      <StatusBar style='light' />
    </>
  );
}

export default TabLayout