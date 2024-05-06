import { Button, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Welcome to our app</Text>
      <Link href={"/about"}>
        <Text
          style={{ fontSize: 22, textDecorationLine: "underline", margin: 30 }}>
          Go to about Page
        </Text>
      </Link>
      <Link href={"/blog"} asChild>
        <Button title="Go to Blog Page" />
      </Link>
      <Link href={"/(tabs)/feed"} asChild>
        <Button title="Go to Tabs" />
      </Link>
    </View>
  );
}