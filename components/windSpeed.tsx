import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
export default function windSpeed(props: { windSpeed: number }) {
  return (
    <View style={styles.column}>
      <Text
        style={[styles.row, { borderRightWidth: 0 }, { borderLeftWidth: 0 }]}
      >
        Wind speed
      </Text>

      <Text style={[styles.row, { borderRightWidth: 0 }]}>
        {props.windSpeed} m/s
      </Text>
    </View>
  );
}
