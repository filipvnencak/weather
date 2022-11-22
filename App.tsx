import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import * as Location from "expo-location";
import Curent from "./current";
import CurentGPS from "./currentGPS";
import styles from "./styles";

export default function App() {
  const [cities, setCities] = useState(["Poprad", "Bratislava", "Košice"]);
  const [inputData, setInputData] = useState<string>("");
  const [arr, setArr] = useState([cities]);

  const plus = () => {
    cities.push(inputData);
    console.log(cities);
    const tempArr = [...arr];
    setArr(tempArr);
  };

  useEffect(() => {
    const isPermison = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
    };
    isPermison();
  }, []);
  const removeItem = (city: any) => {
    let index = cities.indexOf(city);
    const newarr = cities.filter((_, i) => i !== index);
    setCities(newarr);
  };

  return (
    <ScrollView
      style={{ marginTop: 30 }}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
      <CurentGPS />
      {cities.map((city, i) => {
        return <Curent key={i} city={city} cities={cities} />;
      })}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(item) => setInputData(item)}
          placeholder="Enter city"
        />
        <View>
          <Button onPress={plus} title={"Add Item To Array"} />
        </View>
        <FlatList
          data={cities}
          renderItem={({ item }) => (
            <View style={[styles.array, { flexDirection: "row" }]}>
              <Text style={styles.city}>{item}</Text>
              <Text onPress={() => removeItem(item)} style={styles.cross}>
                X
              </Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
