import styled, { css } from "styled-components";

export const StyledCard = styled.section`
  display: flex;
  width: 97%;
  height: 76px;
  border-right: solid 4px #e3f7ef;
  margin: 1rem auto;
  position: relative;
  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding-left: 1.5rem;
    h2 {
      padding: 4px;
      padding-left: 0;
    }
    h5 {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e3f7ef;
      width: 50%;
      padding: 4px;
      border-radius: 8px;
      color: #00a75d;
      font-size: small;
      font-weight: 500;
    }
  }
  :hover {
    cursor: pointer;
    border-color: #00a75d;
    section {
      background-color: #00a75d;
      svg {
        color: white;
      }
    }
  }
  button {
    position: absolute;
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
  ${(props) =>
    !props.techs &&
    css`
      cursor: pointer;
      border-color: #edeaf7;

      section {
        background-color: #edeaf7;
        svg {
          color: #5500ab;
        }
      }
      span {
        h2 {
          width: 100%;
        }
        h5 {
          display: block;
          background-color: white;
          width: 100%;
          color: black;
          font-size: x-small;
        }
      }

      :hover {
        cursor: pointer;
        border-color: #5500ab;
        section {
          background-color: #5500ab;
          svg {
            color: white;
          }
        }
      }
    `}
`;

export const StyleTools = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3f7ef;
  border-radius: 4px;
  width: 70px;
  height: 70px;
  svg {
    font-size: 1.8rem;
    color: #00a75d;
  }
`;
