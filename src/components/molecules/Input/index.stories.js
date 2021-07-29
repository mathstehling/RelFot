import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { InputLogin } from "./index";
import { BaseView } from "../../atoms";

const story = storiesOf("Input", module);

/*story.addDecorator(getStory => <Container> {getStory()} </Container>);*/
story.add("InputLogin", () => (
  <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
    <InputLogin placeholder={text("PlaceHolder", "Usuário")} />
  </BaseView>
));
