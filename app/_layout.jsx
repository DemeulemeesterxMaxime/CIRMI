import { Button } from 'react-native'
import { Stack, router } from 'expo-router'

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              onPress={() => {
                router.push("contact");
              }}
              title="Contact"
            />
          ),
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="contact"
        options={{ headerTitle: "About", presentation: "modal" }}
      />

      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Tabs", headerShown:false }} />
    </Stack>
  );
}