import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function windDirection(props: { deg: number }) {
  const [direction, setDirection] = useState("Northerly");
  function toTextualDescription(degree: number) {
    if (degree > 337.5) {
      setDirection("Northerly");
    }
    if (degree > 292.5) {
      setDirection("North Westerly");
    }
    if (degree > 247.5) {
      setDirection("Westerly");
    }
    if (degree > 202.5) {
      setDirection("South Westerly");
    }
    if (degree > 157.5) {
      setDirection("Southerly");
    }
    if (degree > 122.5) {
      setDirection("South Easterly");
    }
    if (degree > 67.5) {
      setDirection("Easterly");
    }
    if (degree > 22.5) {
      setDirection("North Easterly");
    }
    {
      setDirection("Northerly");
    }
  }
  useEffect(() => {
    toTextualDescription(props.deg);
  }, []);

  return (
    <View style={styles.column}>
      <Text
        style={[styles.row, { borderRightWidth: 0 }, { borderLeftWidth: 0 }]}
      >
        Wind direction
      </Text>
      <Text style={[styles.row, { borderRightWidth: 0 }]}>{direction}</Text>
    </View>
  );
}
