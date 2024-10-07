import { Tabs } from 'expo-router';
import {Image, Text, View} from 'react-native';
import { icons } from "../../constants";
import { StatusBar } from "expo-status-bar";


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <Text>hi</Text>
    // <View className="flex items-center justify-center gap-2">
    //   <Image
    //     source={icon}
    //     resizeMode="contain"
    //     tintColor={color}
    //     className="w-6 h-6"
    //   />
    //   <Text
    //     className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
    //     style={{ color: color }}
    //   >
    //     {name}
    //   </Text>
    // </View>
  );
};

const TabLayout = () => {

  return (
    <>
      <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#161622",
              borderTopWidth: 1,
              borderTopColor: "#232533",
              height: 84,
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
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name='Profile' icon={icons.profile} color={color}  focused={focused}/>
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name='Create' icon={icons.profile} color={color}  focused={focused}/>
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name='Bookmark' icon={icons.profile} color={color}  focused={focused}/>
            ),
          }}
        />
      </Tabs>
      <StatusBar style='light' />
    </>
  );
}

export default TabLayout