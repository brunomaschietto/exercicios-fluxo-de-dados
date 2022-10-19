import { ImagemPerfil, NomeDoUsuario, TitleHeader } from "./styled";

export const Header = (props) => {
  return (
    <TitleHeader>
      <ImagemPerfil src={props.objeto.foto} />
      <NomeDoUsuario>{props.objeto.nome}</NomeDoUsuario>
      Insta4
    </TitleHeader>
  );
};
