import { Animated, Platform, Pressable, Text, View } from "react-native";
import { GlobalStyles } from "./styles";
import { useRef, useState } from "react";

export default function TabChooseCards() {
  const btn1Layer = useRef(0);
  const [btn2Layer, setBtnLayer2] = useState(0);
  const [btn2LayerExpanded, setBtnLayer2Expanded] = useState(false);
  const btn3Layer = useRef(0);
  const fadeFlex = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0.8)).current;
  const fadeHeight = useRef(new Animated.Value(0)).current;
  const fadeWidth = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    setBtnLayer2Expanded(false);
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(fadeWidth, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(fadeHeight, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setBtnLayer2(0);
    });
  };
  const fadeOut = () => {
    setBtnLayer2Expanded(true);
    setBtnLayer2(1);
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0.8,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(fadeWidth, {
      toValue: -18,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(fadeHeight, {
      toValue: -48,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 8,
        marginHorizontal: 32,
        marginVertical: 32,
      }}
    >
      <Pressable
        android_ripple={{ color: "#808080" }}
        style={[GlobalStyles.chooseCard, { backgroundColor: "purple" }]}
      >
        <Text>1</Text>
      </Pressable>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[
            GlobalStyles.chooseCard,
            {
              zIndex: btn2Layer,
              opacity: fadeAnim,
              marginTop: fadeHeight,
              marginBottom: fadeHeight,
              marginStart: fadeWidth,
              marginEnd: fadeWidth,
            },
          ]}
        >
          <Pressable
            onPress={btn2LayerExpanded ? fadeIn : fadeOut}
            android_ripple={{ color: "#808080" }}
            style={({ pressed }) => [
              { flex: 1, padding: 4 },
              pressed && Platform.OS === "ios"
                ? [{ backgroundColor: "#808080" }, { opacity: 0.95 }]
                : [{ backgroundColor: "green" }],
            ]}
          >
            <Text>2</Text>
          </Pressable>
        </Animated.View>
      </View>
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
