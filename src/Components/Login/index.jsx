import { AiFillLock } from "react-icons/ai";
import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router";
import api from "../../Services";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Login = ({ allowed, setAllowed }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Não é um E-mail válido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log("ok");
        const { token, user } = response.data;
        localStorage.setItem("@ken:token", JSON.stringify(token));
        localStorage.setItem("@ken:user", JSON.stringify(user));
        toast.success(`Bem vindo(a) ${user.name}!`);
        setAllowed(true);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Digite um usuário ou senha válida!");
      });
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@ken:token"));
    if (token) {
      return setAllowed(true);
    }
  }, [allowed]);

  if (allowed) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <AiFillLock />
      <form onSubmit={handleSubmit(handleRegister)}>
        <Input registers={register} value="email" placeholder="E-mail" />
        <Input registers={register} value="password" placeholder="E-mail" />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};
export default Login;
