import { Animated, StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  progressBtn: {
    flex: 1,
    flexDirection: "column",
    margin: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  chooseCard: {
    flex: 1,
    margin: 4,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    backgroundColor: "grey",
  },
});

// const growAndOverlay = Animated.sequence([
//     // decay, then spring to start and twirl
//     Animated.add(position, {
//       // coast to a stop
//       velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
//       deceleration: 0.997,
//       useNativeDriver: true,
//     }),
//   ]).start()