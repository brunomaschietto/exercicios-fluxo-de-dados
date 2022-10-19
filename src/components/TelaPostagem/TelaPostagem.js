import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <TitleHeader>{props.objeto2.titulo}</TitleHeader>
      <Image src={props.objeto2.imagem} />
      <Description>{props.objeto2.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
