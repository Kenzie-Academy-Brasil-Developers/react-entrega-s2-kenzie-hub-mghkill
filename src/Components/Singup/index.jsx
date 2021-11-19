import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router";
import api from "../../Services";
import { toast } from "react-toastify";
const SingUp = ({ allowed }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Não é um E-mail válido"),
    password: yup.string().required("Campo obrigatório"),
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Maiúsculas, minúsculas, especiais %$#@%, 8 caracters +"
    // ),
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
        return history.push("/login");
      })
      .catch((err) => console.log("Mensagem de erro"));
  };

  if (allowed) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <span>{errors.email?.message}</span>
        <Input registers={register} value="email" placeholder="E-mail" />
        <span>{errors.name?.message}</span>
        <Input registers={register} value="name" placeholder="Nome" />
        <span>{errors.password?.message}</span>
        <Input registers={register} value="password" placeholder="Senha" />
        <span>{errors.password_confirm?.message}</span>
        <Input
          registers={register}
          value="password_confirm"
          placeholder="Confirme sua senha"
        />
        <span>{errors.bio?.message}</span>
        <Input
          registers={register}
          value="bio"
          placeholder="Sobre você em 1 palavras"
        />
        <span>{errors.contact?.message}</span>
        <Input
          registers={register}
          value="contact"
          placeholder="Contact ex: linkedin/in/kenzinho"
        />
        <span>{errors.course_module?.message}</span>
        <Input
          registers={register}
          value="course_module"
          placeholder="M curso ex: Front Avançado"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
};
export default SingUp;
