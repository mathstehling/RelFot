import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Share,
} from "react-native";

import { Camera } from "expo-camera";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import ViewShot from "react-native-view-shot";
import * as Location from "expo-location";

export function AppPre() {
  const camRef = useRef(null);
  const viewShotRef = useRef();
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === "granted");
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location.coords.longitude);
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Sem resposta</Text>;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  async function captureViewShot() {
    const ImageURI = await viewShotRef.current.capture();
    MediaLibrary.createAssetAsync(ImageURI);
    setOpen(false);
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(image)
      .then(() => {
        alert("Salvo com sucesso!");
        console.log(image);
      })
      .catch((error) => {
        console.log("err", error);
        console.log(image);
      });
  }

  const coordinate = JSON.stringify(location);
  const city = "Entre Rios";
  const data = "17/06/2021";

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.cam} type={type} ref={camRef} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonChange}>
          <AntDesign
            name="retweet"
            size={20}
            color="#000"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}>Virar</Text>
          </AntDesign>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCam} onPress={takePicture}>
          <FontAwesome name="camera" size={23} color="#FFF" />
        </TouchableOpacity>
      </View>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <View style={{ margin: 10, flexDirection: "row" }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => setOpen(false)}
              >
                <FontAwesome name="window-close" size={50} color="#FF0000" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={captureViewShot}
              >
                <FontAwesome name="upload" size={50} color="#121212" />
              </TouchableOpacity>
            </View>
            <ViewShot
              ref={viewShotRef}
              style={{
                width: "100%",
                height: 500,
                width: 300,
                borderRadius: 20,
              }}
              options={{ format: "jpg", quality: 0.9 }}
            >
              <ImageBackground
                style={{
                  width: "100%",
                  height: 500,
                  width: 300,
                  borderRadius: 20,
                }}
                source={{ uri: capturedPhoto }}
              >
                <Text style={styles.textData}>{data}</Text>
                <Text style={styles.textCoordinate}>{coordinate}</Text>
                <Text style={styles.textCity}>{city}</Text>
              </ImageBackground>
            </ViewShot>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

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