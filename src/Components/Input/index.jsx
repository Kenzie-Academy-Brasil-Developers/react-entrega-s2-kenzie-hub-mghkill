import { Conteiner } from "./styles";

const Input = ({ registers = "", inputValue, value = "", error, ...rest }) => {
  return (
    <Conteiner isErrored={!!error}>
      <input {...rest} {...registers(value)} />
    </Conteiner>
  );
};
export default Input;
