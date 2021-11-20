import { AiFillLock } from "react-icons/ai";
import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import api from "../../Services";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { Conteiner } from "./styles";

const Login = ({ allowed, setAllowed }) => {
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
    <Conteiner>
      <h1>Login</h1>
      <AiFillLock />
      <form onSubmit={handleSubmit(handleRegister)}>
        <label>
          - <span>{errors.email?.message}</span>
        </label>
        <Input
          registers={register}
          value="email"
          error={errors.email?.message}
          placeholder="E-mail"
        />
        <label>
          - <span>{errors.password?.message}</span>
        </label>
        <Input
          registers={register}
          value="password"
          error={errors.password?.message}
          type={"password"}
          placeholder="Senha"
        />
        <Button type="submit">Enviar</Button>
      </form>
      <Link to="/singup">Ainda não tem conta? Cadastre-se</Link>
    </Conteiner>
  );
};
export default Login;
