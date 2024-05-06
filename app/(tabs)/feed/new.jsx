import { View, Text, Button } from "react-native";
import { router } from 'expo-router'

export default function Page() {

    return (

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>Add New Post Page</Text>
          <Button
            title="Go Back"
            onPress={() => router.back()}
          />
        </View>
    );
}
