import * as Font from "expo-font";
import { AppLoading } from "expo";

export const fonts = () => {
  return Font.loadAsync({
    bold: require("../assets/fonts/Inter-Bold.ttf"),
    light: require("../assets/fonts/Inter-Light.ttf"),
    medium: require("../assets/fonts/Inter-Medium.ttf"),
    semiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    regular: require("../assets/fonts/Inter-Regular.ttf"),
  });
};
