import styled from "styled-components";

export const StyledMiddleCard = styled.div`
  background-color: white;
  width: 90%;
  padding: 12px;
  border-radius: 12px;
  margin-top: 1rem;
  div {
    min-height: 34vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 4px;
    width: 100%;
  }

  h3 {
    font-size: small;
    margin: 12px;
  }
  @media (min-width: 600px) {
    width: 35%;
  }
`;
