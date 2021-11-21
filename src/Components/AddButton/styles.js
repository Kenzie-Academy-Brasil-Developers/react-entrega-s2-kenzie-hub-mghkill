import styled, { css } from "styled-components";

export const StyledAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: #00a75d;
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 2px;
  color: #5500aa;

  p {
    background-color: white;
    svg {
      font-size: 50px;
      flex: 1;
      :hover {
        color: #00a75d;
      }
    }
  }

  ${(props) =>
    !props.techs &&
    css`
      color: #00a75d;

      p {
        svg {
          font-size: 50px;
          :hover {
            color: #5500aa;
          }
        }
      }
    `}
`;
