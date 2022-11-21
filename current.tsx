import { View, SafeAreaView } from "react-native";

import styles from "./styles";
import { Responses } from "./types";
import React, { useState, useEffect } from "react";
import zerodata from "./data.json";
import { environment } from "./enviroment";
import Main from "./components/main";
import Humidity from "./components/humidity";
import Presure from "./components/presure";
import WindSpeed from "./components/windSpeed";
import WindDirection from "./components/windDirection";

export default function App(props: {
  city?: string;
  localization?: number;
  cities: string[];
}) {
  const [data, setData] =
    useState<Responses.CurrentWeatherDataResponse>(zerodata);
  const [direction, setDirection] = useState("Northerly");
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${environment.openWeatherKey}&units=metric`
      );
      const data = await response.json();
      if (!response.ok) {
        console.log("somethnig wrong");
      } else {
        setData(data);
      }
    };
    fetchdata();
  }, []);

  let weatherId = 0;
  if (!Array.isArray(data) && data.weather[0].id) {
    weatherId = data.weather[0].id;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Main
        name={data.name}
        icon={data.weather[0].icon}
        temp={data.main.temp}
        feels_like={data.main.feels_like}
        description={data.weather[0].description}
      />
      <View style={styles.bottom}>
        <Humidity humidity={data.main.humidity} />
        <Presure pressure={data.main.pressure} />
        <WindDirection deg={data.wind.deg} />
        <WindSpeed windSpeed={data.wind.speed} />
      </View>
    </SafeAreaView>
  );
}
