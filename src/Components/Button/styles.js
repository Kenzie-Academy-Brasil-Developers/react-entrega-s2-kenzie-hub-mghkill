import styled from "styled-components";

export const StyleButton = styled.button`
  border: #58b747 solid 2px;
  margin: 4px auto;
  margin-top: 12px;
  height: 40px;
  width: 80%;
  background-color: #58b747;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  box-shadow: rgba(11, 11, 11, 0.08) 0 10px 10px 0px,
    rgba(45, 1, 49, 0.25) 0px 0px 6px 0px;
  :hover {
    background-color: #5500ab;
    border: #455866 solid 2px;
    transition: 0.5s;
  }
`;
