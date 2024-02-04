import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import StepList from "./progressTab";
import TabChooseCards from "./tabChoose";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <TabChooseCards />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <StepList />
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#FFFF00" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#01FF01",
      }}
    >
      <TabView
        tabBarPosition="bottom"
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}
