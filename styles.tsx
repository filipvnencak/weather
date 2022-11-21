import { StyleSheet, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  ltitle: {
    textAlign: "center",
    fontSize: 42,
    color: "#e96e50",
  },
  subtitle: {
    fontSize: 24,
    marginVertical: 12,
    marginLeft: 4,
    color: "#e96e50",
  },
  container: {
    marginTop: 20,
    flex: 3,
    width: deviceWidth,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  current: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    placeContent: "center",
    marginTop: 10,
  },
  temp: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  currentDescription: {
    width: "100%",
    textAlign: "center",
    fontWeight: "200",
    fontSize: 24,
    marginBottom: 24,
  },
  hour: {
    padding: 6,
    alignItems: "center",
  },
  array: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    margin: 10,
    height: 40,
    width: deviceWidth - 40,
    borderRadius: 20,
  },
  city: {
    fontSize: 30,
    marginLeft: 10,
  },
  cross: {
    fontSize: 30,
    color: "red",
    position: "absolute",
    right: 10,
  },
  dayDetails: {
    justifyContent: "center",
  },
  dayTemp: {
    marginLeft: 12,
    alignSelf: "center",
    fontSize: 20,
  },
  largeIcon: {
    width: 250,
    height: 200,
  },
  smallIcon: {
    width: 100,
    height: 100,
  },
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#D3D3D3",
    borderRadius: 20,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    flexDirection: "column",
  },
  row: {
    borderColor: "#D3D3D3",
    width: "50%",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    flex: 1,
    textAlign: "center",
    padding: 10,
  },
  column: {
    flexDirection: "row",
    width: deviceWidth - 20,
  },
});
