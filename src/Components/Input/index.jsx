import { Conteiner } from "./styles";

const Input = ({ registers, value, ...rest }) => {
  return (
    <Conteiner>
      <input {...rest} {...registers(value)} />
    </Conteiner>
  );
};
export default Input;
