import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { LargeButton } from "./index";
import { BaseView } from "../Container";

const story = storiesOf("Button", module);

/*story.addDecorator(getStory => <Container> {getStory()} </Container>);*/
story.add("LargeButton", () => <LargeButton />);
