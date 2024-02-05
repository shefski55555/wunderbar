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
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    backgroundColor: "grey",
  },
});
