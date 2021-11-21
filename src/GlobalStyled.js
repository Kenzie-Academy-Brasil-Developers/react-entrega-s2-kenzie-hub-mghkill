import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
    }
    body{
      background: radial-gradient(circle, rgba(67,89,204,1) 0%, rgba(198,83,190,1) 100%);
      ${(props) =>
        props.backGround &&
        css`
          background: radial-gradient(
            circle,
            rgba(235, 233, 235, 1) 0%,
            rgba(235, 233, 235, 1) 100%
          );
        `}
    }
    

`;
