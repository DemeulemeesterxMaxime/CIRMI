import { View, Text, Button } from "react-native";
import { router} from "expo-router";

export default function feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>Feed Page</Text>
    </View>
  );
}
