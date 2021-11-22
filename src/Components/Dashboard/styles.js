import styled, { css } from "styled-components";

export const Conteiner = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin: 18px auto;
    max-width: 1100px;
    border-radius: 12px;
    background-color: white;
    width: 90%;

    span {
      background-color: #5500ab;
      color: white;
      padding: 6px;
      border-radius: 8px;
      box-shadow: rgba(102, 2, 202, 0.27) 0 10px 10px 0px,
        rgba(168, 0, 183, 0.4) 0px 0px 6px 0px;
    }
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

    aside {
      width: 90%;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 12px 8px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: #5500ab;
        color: white;
        div {
          padding: 0;
          display: block;
          h3 {
            display: block;
            font-size: small;
            padding: 2px;
          }
          p {
            font-weight: 500;
            padding: 2px;
            font-size: small;
            padding: 2px;
          }
          span {
            font-weight: 200;
            font-size: x-small;
            color: #d2d2d2;
            padding: 2px;
          }
        }

        img {
          width: 30%;
          margin: 4px;
          border-radius: 50%;
        }
        h4 {
          color: white;
          font-size: small;
        }
      }
    }
  }
  @media (min-width: 600px) {
    header {
      max-width: 1070px;
      width: 96%;
    }
    article {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      margin: 18px auto;
      aside {
        width: 27%;
      }
    }
  }
`;

export const Card = styled.span`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  p {
    font-size: small;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
    padding: 8px;
    background-color: #edeaf7;
    color: #5e5e5e;
    border-radius: 8px;
  }
  svg {
    font-size: 60px;
    margin-right: 12px;
    background-color: #5500ab;
    color: white;
    padding: 8px;
    border-radius: 8px;
  }
  ${(props) =>
    props.green &&
    css`
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;

      svg {
        background-color: #00a75d;
      }
    `}
`;
