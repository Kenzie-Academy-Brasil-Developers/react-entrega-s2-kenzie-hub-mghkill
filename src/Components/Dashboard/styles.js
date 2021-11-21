import styled from "styled-components";

export const Conteiner = styled.div`
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px;
    margin: 18px auto;
    max-width: 1100px;
    border-radius: 12px;
    background-color: white;
    img {
      width: 80px;
      border-radius: 50%;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 12px;
    max-width: 1100px;

    section {
      width: 90%;
      div {
        border: solid 1px red;
        min-height: 30vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 4px;
        width: 100%;
      }
    }
    h3 {
      font-size: small;
      margin: 12px;
    }
    aside {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: solid 1px red;
        width: 100%;
        padding: 12px 24px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: #5500ab;
        color: white;
        img {
          width: 80px;
          border-radius: 50%;
        }
        h4 {
          color: white;
          font-size: small;
        }
      }
    }
  }
  @media (min-width: 900px) {
    article {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      margin: 18px auto;
    }
  }
`;

export const Card = styled.span`
  border: solid 1px blue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 100%;

  svg {
    font-size: 60px;
    margin-right: 12px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-small;
    width: 100%;
    height: 60px;
    margin: 12px auto;
    padding: 12px;
    background-color: grey;

    p {
      color: white;
    }
  }
`;
