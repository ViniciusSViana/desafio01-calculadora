import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center; 
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    min-height: 340px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

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