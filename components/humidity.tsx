import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";

export default function humidity(props: { humidity: number }) {
  return (
    <View style={[styles.column]}>
      <Text
        style={[
          styles.row,
          { borderTopWidth: 0 },
          { borderRightWidth: 0 },
          { borderLeftWidth: 0 },
        ]}
      >
        Humidity
      </Text>

      <Text
        style={[styles.row, { borderTopWidth: 0 }, { borderRightWidth: 0 }]}
      >
        {props.humidity}%
      </Text>
    </View>
  );
}
