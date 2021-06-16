import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  cam: {
    // flex: 1,
    position: "absolute",
    width: 300,
    height: 500,
    alignItems: "center",
  },
  camContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  buttonChange: {
    /* position: "absolute", */
    bottom: 15,
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },

  buttonCam: {
    justifyContent: "center",
    margin: 20,
    height: 50,
    width: 80,
    alignItems: "center",
    backgroundColor: "#121212",
    borderRadius: 5,
  },

  text: {
    fontSize: 20,
    color: "#000",
  },

  textData: {
    position: "absolute",
    top: 390,
    left: 10,
    right: 0,
    bottom: 0,
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF202",
  },
  textCoordinate: {
    position: "absolute",
    top: 420,
    left: 10,
    right: 0,
    bottom: 0,
    fontSize: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    color: "#FFF202",
  },
  textCity: {
    position: "absolute",
    top: 450,
    left: 10,
    right: 0,
    bottom: 0,
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF202",
  },
});
