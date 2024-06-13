import styled from "styled-components";

export const Container = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-image: url('https://wallpapercave.com/wp/wp4923981.jpg'); /* Substitua pelo caminho da sua imagem */
  background-size: cover;
  background-position: center;
  position: relative; 
  overflow: auto;
`

export const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.5); 
  width: 60%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 2px; 
  margin-bottom: 40px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const Column = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: space-between;
    align-items:center;

`

export const Header = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 100PX;
    margin-bottom: auto; auto;
    color: #FFFF

`
export const Overlay = styled.div`
 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo branco semi-transparente */
`;