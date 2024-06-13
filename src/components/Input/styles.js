import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #D4E6F1;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    input {
        width: 100%;
        height: 75px;
        background-color: #D4E6F1;
        border: 0;
        text-align: right;
        padding-right: 3px;

        font-size: 24px;
        font-family: 'Roboto';

        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        
    }

    `;

export default InputContainer;