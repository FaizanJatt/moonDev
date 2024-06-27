import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text className="bg-red-200">Hi</Text>
      </View>
    </SafeAreaView>
  );
}
