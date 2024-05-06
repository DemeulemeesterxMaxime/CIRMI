import { View, Text, Button } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams, Stack } from 'expo-router'

export default function Page() {
    const { id, author,type } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Blog Post Details N°{id}</Text>
        <Text style={{ fontSize: 15 }}>Author : {author}</Text>
        <Text style={{ fontSize: 15 }}>Domain : {type}</Text>
        <Button onPress={() => router.back()} title="Go Back" />
      </View>
    </>
  );
}