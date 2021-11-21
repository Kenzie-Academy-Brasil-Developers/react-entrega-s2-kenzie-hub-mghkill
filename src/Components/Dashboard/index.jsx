import { Redirect } from "react-router";
import { MdSettingsCell } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button";
import { Card, Conteiner } from "./styles";
import MiddleCards from "../MiddleCards";
import { useEffect, useState } from "react";
import api from "../../Services";

const Dashboard = ({ allowed, setAllowed, setBackGround }) => {
  const [techsModal, setTechsModal] = useState(false);
  const [worksModal, setWorksModal] = useState(false);
  const [id] = useState(JSON.parse(localStorage.getItem("@ken:user")).id || "");
  const [getUserItem, setGetUserItem] = useState({});

  useEffect(() => {
    api.get(`/users/${id}`).then((response) => setGetUserItem(response.data));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setBackGround(false);
    setAllowed(false);
  };
  const handleOnRender = (techs) => {
    if (techs) {
      setTechsModal(true);
    } else {
      setWorksModal(true);
    }
  };
  const handleAddItem = () => {};

  if (!allowed) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {techsModal && <div>modal techs</div>}
      {worksModal && <div>modal works</div>}

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
            getUserItem={getUserItem.techs}
            techs
          />
          <MiddleCards
            tytle={"Meus Trabalhos"}
            handleOnRender={handleOnRender}
            getUserItem={getUserItem.works}
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
              <p>
                <span>
                  <MdSettingsCell />
                </span>
                Ligar agora - +55 (84) 98100-2211
              </p>
            </Card>
            <Card green>
              <p>
                <span>
                  <HiOutlineMail />
                </span>
                Enviar email - samuel@teste.com.br
              </p>
              <Button onclick={handleLogout}>Sair</Button>
            </Card>
          </aside>
        </article>
      </Conteiner>
    </>
  );
};
export default Dashboard;
