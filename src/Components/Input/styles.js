import styled, { css } from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 46px;
  margin: 8px auto;
  border-radius: 28px;
  border: solid 1px #e7e7e7;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
    `}
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 18px;
    border: #e7e7e7 solid 1px;
    border-radius: 28px;
    background-color: #e7e7e7;
    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
`;
