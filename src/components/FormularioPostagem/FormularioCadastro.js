import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const enviarDados = () => {
    const objeto2 = {
      titulo: props.titulo,
      imagem: props.imagem,
      descricao: props.descricao
    };
    props.setObjeto2(objeto2);
  };
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
            id="titulo"
            value={props.titulo}
            onChange={props.onChangeTitulo}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
            id="foto"
            value={props.imagem}
            onChange={props.onChangeImagem}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            value={props.descricao}
            onChange={props.onChangeDescricao}
          />
        </StyledLabel>
        <SendButton onClick={enviarDados}> Enviar </SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
