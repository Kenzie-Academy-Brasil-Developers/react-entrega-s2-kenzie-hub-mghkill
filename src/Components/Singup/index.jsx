import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Conteiner } from "./styles";
import { FaUserAlt } from "react-icons/fa";
import api from "../../Services";

const SingUp = ({ allowed, setAllowed }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Não é um E-mail válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Maiúsculas, minúsculas, especiais %$#@%"
      ),
    password_confirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    const dataValue = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    api
      .post("/users", dataValue)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso!");
        history.push("/login");
      })
      .catch((err) =>
        toast.error("E-mail já cadastrado. Tente outro entereço!")
      );
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
      <h1>Cadastro</h1>
      <FaUserAlt />
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
          - <span>{errors.name?.message}</span>
        </label>
        <Input
          registers={register}
          value="name"
          error={errors.name?.message}
          placeholder="Nome"
        />
        <label>
          - <span>{errors.password?.message}</span>
        </label>
        <Input
          registers={register}
          value="password"
          error={errors.password?.message}
          type="password"
          placeholder="Senha"
        />
        <label>
          - <span>{errors.password_confirm?.message}</span>
        </label>
        <Input
          registers={register}
          value="password_confirm"
          error={errors.password_confirm?.message}
          type="password"
          placeholder="Confirme sua senha"
        />
        <label>
          - <span>{errors.bio?.message}</span>
        </label>
        <Input
          registers={register}
          value="bio"
          error={errors.bio?.message}
          placeholder="Módulo"
        />
        <label>
          - <span>{errors.contact?.message}</span>
        </label>
        <Input
          registers={register}
          value="contact"
          error={errors.contact?.message}
          placeholder="Contact ex: linkedin/in/kenzinho"
        />
        <label>
          - <span>{errors.course_module?.message}</span>
        </label>
        <Input
          registers={register}
          value="course_module"
          error={errors.course_module?.message}
          placeholder="Curso ex: (Front Avançado)"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/login">Já tem uma conta? Faça Login!</Link>
    </Conteiner>
  );
};
export default SingUp;
