import { Redirect } from "react-router";
import { AiFillHome } from "react-icons/ai";
import Button from "../Button";
import { Card, Conteiner } from "./styles";
import MiddleCards from "../MiddleCards";

const Dashboard = ({ allowed, setAllowed, setBackGround }) => {
  const handleLogout = () => {
    localStorage.clear();
    setBackGround(false);
    setAllowed(false);
  };
  const handleOnRender = () => {
    console.log("renderizar");
  };
  const valueApi = "teste";

  if (!allowed) {
    return <Redirect to="/login" />;
  }

  return (
    <Conteiner>
      <header>
        <h2>
          Kenzie <span>Hub </span>
        </h2>
        <img
          src="https://voceconstroi.fbitsstatic.net/img/p/perfil-redutor-eucafloor-smart-oak-1-80m-70857/257545.jpg?w=420&h=420&v=no-change&qs=ignore"
          alt="perfil_img"
        />
      </header>

      <article>
        <MiddleCards
          tytle={"Minhas Tecnologias"}
          handleOnRender={handleOnRender}
          valueApi={valueApi}
        />

        <MiddleCards
          tytle={"Meus Trabalhos"}
          handleOnRender={handleOnRender}
          valueApi={valueApi}
        />

        <aside>
          <div>
            <img
              src="https://voceconstroi.fbitsstatic.net/img/p/perfil-redutor-eucafloor-smart-oak-1-80m-70857/257545.jpg?w=420&h=420&v=no-change&qs=ignore"
              alt="img_perfil"
            />
            <h4>Nome de usuário</h4>
          </div>

          <Card>
            <span>
              <AiFillHome />

              <p>
                <p>Ligar agora -</p> +55 (84) 98100-2211
              </p>
            </span>
            <span>
              <AiFillHome />

              <p>
                <p>Enviar email</p> - samuel@teste.com.br
              </p>
            </span>
            <Button onclick={handleLogout}>Sair</Button>
          </Card>
        </aside>
      </article>
    </Conteiner>
  );
};
export default Dashboard;
