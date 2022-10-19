import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaPostagem/TelaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [objeto, setObjeto] = useState("");
  const [objeto2, setObjeto2] = useState("");

  const onChangeNome = (event) => {
    console.log(event.target.value);
    setNome(event.target.value);
  };
  const onChangeFoto = (event) => {
    setFotoPerfil(event.target.value);
  };
  const onChangeTitulo = (event) => {
    setTitulo(event.target.value);
  };
  const onChangeImagem = (event) => {
    setImagem(event.target.value);
  };

  const onChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header objeto={objeto} />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              nome={nome}
              fotoPerfil={fotoPerfil}
              setObjeto={setObjeto}
              onChangeNome={onChangeNome}
              onChangeFoto={onChangeFoto}
            />
          ) : (
            <FormularioPostagem
              titulo={titulo}
              imagem={imagem}
              descricao={descricao}
              setObjeto2={setObjeto2}
              onChangeTitulo={onChangeTitulo}
              onChangeImagem={onChangeImagem}
              onChangeDescricao={onChangeDescricao}
            />
          )}
        </aside>
        <TelaDaPostagem objeto2={objeto2} />
      </Container>
    </>
  );
}

export default App;
