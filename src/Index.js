import React from "react";
import { ThemeProvider } from "styled-components";
import Storybook from "../storybook";
import { theme } from "./styles/theme";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { styles } from "./styles/styles";

export const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Storybook />
    </ThemeProvider>
  );
};
