import Button from "../Button";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { Redirect } from "react-router";
import { Conteiner } from "./styles";

const Home = ({ allowed, setAllowed }) => {
  const history = useHistory();
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
      <AiFillHome />
      <h1>
        Kenzie <span>Hub</span>
      </h1>
      <Button onclick={() => history.push("/login")}>LOGIN</Button>
      <Button onclick={() => history.push("/singup")}>CADASTRO</Button>
    </Conteiner>
  );
};
export default Home;
