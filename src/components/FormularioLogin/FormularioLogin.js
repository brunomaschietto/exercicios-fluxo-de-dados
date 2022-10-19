import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    const objeto = {
      nome: props.nome,
      foto: props.fotoPerfil
    };
    props.setObjeto(objeto);
    props.setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
            type={"text"}
            value={props.nome}
            onChange={props.onChangeNome}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
            type={"text"}
            value={props.fotoPerfil}
            onChange={props.onChangeFoto}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
