import styled from "styled-components";

export const Conteiner = styled.div`
  margin: 0 auto;
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  padding-bottom: 6vh;
  border-radius: 12px;
  background-color: white;
  width: 84%;
  max-width: 400px;
  box-shadow: rgba(25, 25, 25, 0.14) 0 0 1px 0,
    rgba(0, 0, 0, 0.4) 7px 7px 70px 5px;
  svg {
    font-size: 102px;
    background-color: #455866;
    border: #e8e8e8 solid 6px;
    color: white;
    padding: 11px;
    margin: 24px;
    border-radius: 100%;
    box-shadow: rgba(102, 2, 202, 0.27) 0 10px 10px 0px,
      rgba(168, 0, 183, 0.4) 0px 0px 6px 0px;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    label {
      font-size: x-small;
      margin-left: 12px;
      color: white;
    }
    span {
      font-size: x-small;
      color: red;
    }
  }
  h1 {
    margin-bottom: 24px;
    text-align: center;
    span {
      background-color: #5500ab;
      color: white;
      padding: 6px;
      border-radius: 8px;
      box-shadow: rgba(102, 2, 202, 0.27) 0 10px 10px 0px,
        rgba(168, 0, 183, 0.4) 0px 0px 6px 0px;
    }
  }
  a {
    margin: 16px auto;
    font-size: small;
  }
`;
