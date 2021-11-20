import { Redirect } from "react-router";
import { AiFillHome } from "react-icons/ai";
import AddButton from "../AddButton";
import Button from "../Button";
import { Card, Conteiner } from "./styles";

const Dashboard = ({ allowed, setAllowed }) => {
  const handleLogout = () => {
    localStorage.clear();
    setAllowed(false);
  };

  if (!allowed) {
    return <Redirect to="/login" />;
  }

  return (
    <Conteiner>
      <header>
        <h1>
          Kenzie <span>Hub</span>
        </h1>
        <img
          src="https://voceconstroi.fbitsstatic.net/img/p/perfil-redutor-eucafloor-smart-oak-1-80m-70857/257545.jpg?w=420&h=420&v=no-change&qs=ignore"
          alt="perfil_img"
        />
      </header>

      <article>
        <section>
          <div>
            <h3>Minhas Tecnologias</h3>
            <AddButton route={"/"} />
            {/* Fazer o modal renderizar apenas 
            quando um determinado state estiver true
            
            */}
          </div>
        </section>
        <section>
          <div>
            <h3>Meus Trabalhos</h3>
            <AddButton route={"/"} />
          </div>
        </section>
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
