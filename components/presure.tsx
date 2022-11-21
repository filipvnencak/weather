import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function presure(props: { pressure: number }) {
  return (
    <View style={styles.column}>
      <Text
        style={[styles.row, { borderRightWidth: 0 }, { borderLeftWidth: 0 }]}
      >
        Presure
      </Text>

      <Text style={[styles.row, { borderRightWidth: 0 }]}>
        {props.pressure} hPa
      </Text>
    </View>
  );
}
