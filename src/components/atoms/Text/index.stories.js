import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
  Title,
  SubTitle,
  InputText,
  LegText,
  InputEmailText,
  TextPlaceholder,
} from "./index";
import { BaseView } from "../Container";

const story = storiesOf("Text", module);

/*story.addDecorator(getStory => <Container> {getStory()} </Container>);*/
story.add("Splash", () => (
  <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
    <Title>{text("Splash", "Relatório fotográfico")}</Title>
  </BaseView>
));

story.add("SubTitle", () => (
  <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
    <SubTitle>{text("SubTitle", "oi")}</SubTitle>
  </BaseView>
));

story.add("InputText", () => (
  <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
    <InputText>{text("InputText", "DNIT")}</InputText>
  </BaseView>
));

story.add("LegText", () => (
  <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
    <LegText>{text("LegText", "Inserir imagem")}</LegText>
  </BaseView>
));

story.add("InputEmailText", () => (
  <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
    <InputEmailText>{text("InputEmailText", "Usuário")}</InputEmailText>
  </BaseView>
));

story.add("TextPlaceholder", () => (
  <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
    <TextPlaceholder>{text("Usuário")}</TextPlaceholder>
  </BaseView>
));
