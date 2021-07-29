import { storiesOf } from "@storybook/react-native";
import React from "react";
import { SplashScreen, Image } from "./index";

const story = storiesOf("SplashScreen", module);

/*story.addDecorator(getStory => <Container> {getStory()} </Container>);*/
story.add("SplashScreen", () => <SplashScreen />);
