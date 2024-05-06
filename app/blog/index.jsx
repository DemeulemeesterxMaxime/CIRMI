import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
        <Text style={{ fontSize: 22 }}>Blog Page</Text>
      <View>
        <Button
          onPress={() => router.push("/blog/1?author=Emma&type=Romance")}
          title="Go to Blog Post 1"
        />
        <Button
          onPress={() => router.push("/blog/2?author=Eric&type=Action")}
          title="Go to Blog Post 2"
        />
        <Button
          onPress={() => router.push("/blog/3?author=Maxime&type=Fiction")}
          title="Go to Blog Post 3"
        />
        <Link
          href={{
            pathname: "blog/4",
            params: { author: "Karine", type: "Téléréalité" },
          }}>
          <Text style={{ fontSize: 22 }}> Go To Blog Post 4</Text>
        </Link>
        <Button onPress={() => router.back()} title="Go Back" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
