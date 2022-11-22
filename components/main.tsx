import React from "react";
import { View, Text } from "react-native";
import WeatherIcon from "./weatherIcon";
import styles from "../styles";
import { Responses } from "../types";

export default function main(props: {
  name: string;
  icon: string;
  temp: number;
  feels_like: number;
  description: string;
}) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.ltitle}>{props.name}</Text>
      <WeatherIcon icon={props.icon} />
      <Text style={styles.temp}>{Math.round(props.temp)}°C</Text>
      <View style={[{ flexDirection: "row" }, { justifyContent: "center" }]}>
        <Text style={styles.subtitle}>Feels like:</Text>
        <Text style={styles.subtitle}>{Math.round(props.feels_like)}°C</Text>
      </View>
      <View>
        <Text style={styles.currentDescription}>{props.description}</Text>
      </View>
    </View>
  );
}
