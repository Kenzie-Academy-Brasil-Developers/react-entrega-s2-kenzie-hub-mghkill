import Button from "../Button";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { Redirect } from "react-router";

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
    <div>
      <h1>
        Kenzie <span>Hub</span>
      </h1>
      <AiFillHome />
      <Button onclick={() => history.push("/login")}>Login</Button>
      <Button onclick={() => history.push("/singup")}>Cadastro</Button>
    </div>
  );
};
export default Home;
