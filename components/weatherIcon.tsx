import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import styles from "../styles";
import { Responses } from "../types";

export default function WeatherIcon(props: { icon: string }) {
  const [icon, setIcon] = useState<string>("");
  useEffect(() => {
    let icon = "";
    if (props.icon) {
      icon = props.icon;
      setIcon(icon);
    } else {
      return;
    }
  }, [props.icon]);

  return (
    <Image
      style={styles.largeIcon}
      source={{
        uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
      }}
    />
  );
}
