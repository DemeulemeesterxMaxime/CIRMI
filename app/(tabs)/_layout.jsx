import { Button  } from 'react-native'
import React from 'react'
import { Tabs, router} from 'expo-router'
import { AntDesign, Feather } from '@expo/vector-icons'

export default function _layout() {
return (
    <Tabs>
    <Tabs.Screen
      name="feed"
      options={{
        tabBarIcon: () => <Feather name="list" size={24} color="black" />,
        tabBarLabel: "Feed",
        headerTitle: "Feed",
        headerRight: () => (
            <Button
              onPress={() => {
                router.push(`/feed/new`);
              }}
              title="Add Post"
            />
          ),
      }}
    />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
}