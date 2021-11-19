const Input = ({ registers, value, ...rest }) => {
  return (
    <div>
      <input {...rest} {...registers(value)} />
    </div>
  );
};
export default Input;
