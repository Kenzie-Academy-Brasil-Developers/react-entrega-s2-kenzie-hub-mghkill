import Button from "../Button";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";

const Home = ({ allowed }) => {
  const history = useHistory();
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
