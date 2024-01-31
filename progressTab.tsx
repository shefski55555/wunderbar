import React, { useEffect } from "react";
import {
  Button,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  ToastAndroid,
  View,
  useWindowDimensions,
} from "react-native";
import { GlobalStyles } from "./styles";

export default function StepList() {
  let buttons: number[] = [];

  const total = 210;
  const chunkSize = 8;

  for (let i = 0; i < total; i++) {
    buttons.push(i + 1);
  }

  const screenWidthPerItem =
    (useWindowDimensions().width - useWindowDimensions().width / 10) /
    chunkSize;

  const chunkedArray: any[] = chunkArray(buttons, chunkSize);

  return (
    <ScrollView>
      {chunkedArray.length !== 0 && (
        <View style={{ alignItems: "center" }}>
          {chunkedArray.map((chunk, chunkedArrayIndex) =>
            chunk.map((element: number, index: number) => (
              <Pressable
                key={element}
                style={[
                  GlobalStyles.progressBtn,
                  {
                    marginStart: calcIndent(
                      index,
                      chunkedArrayIndex,
                      chunkedArray.length,
                      chunkSize,
                      screenWidthPerItem
                    ),
                  },
                ]}
                onPress={() =>
                  ToastAndroid.show(element.toString(), ToastAndroid.SHORT)
                }
              >
                <Text style={{ color: "#ffffff" }}>{chunkedArrayIndex}</Text>
              </Pressable>
            ))
          )}
        </View>
      )}
    </ScrollView>
  );
}

function chunkArray(array: string | any[], chunkSize: number) {
  const result = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}

function calcIndent(
  index: number,
  chunkedArrayIndex: number,
  chunkArrayLength: number,
  chunkSize: number,
  widthPerItem: number
) {
  // if (
  //   (chunkedArrayIndex == 0 && index === 0) ||
  //   (index == chunkSize - 1 && chunkedArrayIndex == chunkArrayLength - 1)
  // ) {
  //   return 0;
  // }

  const currentIndex =
    index > chunkSize / 2 ? chunkSize + 1 - (index + 1) : index;

  const offset =
    chunkedArrayIndex % 2
      ? widthPerItem * currentIndex
      : widthPerItem * currentIndex * -1;

  return offset;
}
