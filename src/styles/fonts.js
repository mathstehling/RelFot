import * as Font from "expo-font";
import { AppLoading } from "expo";

export const fonts = () => {
  return Font.loadAsync({
    bold: require("../assets/fonts/OpenSans-Bold.ttf"),
    semiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
    regular: require("../assets/fonts/OpenSans-Regular.ttf"),
  });
};
