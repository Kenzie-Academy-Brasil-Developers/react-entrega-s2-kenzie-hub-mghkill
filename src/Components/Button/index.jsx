import { StyleButton } from "./styles";

const Button = ({ type, onclick, children }) => {
  return (
    <>
      <StyleButton type={type} onClick={onclick}>
        {children}
      </StyleButton>
    </>
  );
};
export default Button;
