import { Platform, Pressable, Text, View } from "react-native";
import { GlobalStyles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabChooseCards() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Pressable
        android_ripple={{ color: "#808080" }}
        style={[GlobalStyles.chooseCard, { backgroundColor: "purple" }]}
      >
        <Text>1</Text>
      </Pressable>
      <Pressable
        // android_ripple={{ color: "#808080" }}
        style={({ pressed }) => [
          GlobalStyles.chooseCard,
          pressed && Platform.OS !== "ios"
            ? [{ backgroundColor: "#808080" }, { opacity: 0.95 }]
            : [{ backgroundColor: "green" }],
        ]}
      >
        <Text>2</Text>
      </Pressable>
      <View style={[GlobalStyles.chooseCard]}>
        <Pressable
          android_ripple={{ color: "#808080" }}
          style={[{ flex: 1, backgroundColor: "blue", padding: 4, margin: -2 }]}
        >
          <Text>4</Text>
        </Pressable>
      </View>
    </View>
  );
}
