import React from "react";
import { BaseView } from "../../atoms/Container";
import { Title } from "../../atoms";
import { Image } from "./styles";

export const SplashScreen = (children) => {
  return (
    <BaseView fullWidth fullHeight align={"center"} justify={"center"}>
      <Image source={require("../../../assets/img/GCT.png")} />
      <Title mt={23}>Relatório fotográfico</Title>
    </BaseView>
  );
};
