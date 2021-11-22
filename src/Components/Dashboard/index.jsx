import { Redirect } from "react-router";
import { MdSettingsCell } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button";
import { Card, Conteiner } from "./styles";
import MiddleCards from "../MiddleCards";
import { useEffect, useState } from "react";
import api from "../../Services";
import ConteinerModal from "../Modal";
import { toast } from "react-hot-toast";

const Dashboard = ({ allowed, setAllowed, setBackGround }) => {
  const [techsModal, setTechsModal] = useState(false);
  const [worksModal, setWorksModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [remove, setRemove] = useState(false);
  const [idRemove, setIdRemove] = useState("");
  const [itemRemove, setItemRemove] = useState({});
  const [endPointRemove, setEndPointRemove] = useState("");
  const [storage] = useState(
    JSON.parse(localStorage.getItem("@ken:user")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@ken:token")) || ""
  );

  const [getUserItem, setGetUserItem] = useState({});

  const handleLogout = () => {
    localStorage.clear();
    setBackGround(false);
    setAllowed(false);
  };
  const handleOnRender = (techs) => {
    if (techs) {
      setTechsModal(true);
      setOpen(true);
    } else {
      setWorksModal(true);
      setOpen(true);
    }
  };

  const handleAddTechs = (value1, value2) => {
    const objResponse = {
      title: value1,
      status: value2,
    };
    api
      .post("users/techs", objResponse, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success(`Informações adicionadas`);
        api
          .get(`/users/${storage.id}`)
          .then((response) => setGetUserItem(response.data));
      })
      .catch((err) => {
        toast.error(`Ocorreu um erro, tente novamente!`);
      });

    setOpen(false);
    setTechsModal(false);
    setWorksModal(false);
  };

  const handleAddWorks = (value1, value2, value3) => {
    const objResponse = {
      title: value1,
      description: value2,
      deploy_url: value3,
    };
    api
      .post("users/works", objResponse, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success(`Informações adicionadas`);
        api
          .get(`/users/${storage.id}`)
          .then((response) => setGetUserItem(response.data));
      })
      .catch((err) => {
        toast.error(`Ocorreu um erro, tente novamente!`);
      });

    setOpen(false);
    setTechsModal(false);
    setWorksModal(false);
  };
  const handleModalFilter = (item, endPoint) => {
    setRemove(true);
    setIdRemove(item.id);
    setItemRemove(item);
    setEndPointRemove(endPoint);
    setOpen(true);
  };
  const handleFilter = () => {
    api
      .delete(`users/${endPointRemove}/${idRemove}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success(`Informações removidas`);
        api
          .get(`/users/${storage.id}`)
          .then((response) => setGetUserItem(response.data));
        setRemove(false);
      });
  };

  useEffect(() => {
    api
      .get(`/users/${storage.id}`)
      .then((response) => setGetUserItem(response.data));
  }, [open]);

  if (!allowed) {
    return <Redirect to="/login" />;
  }
  console.log(remove);
  return (
    <>
      {techsModal && (
        <ConteinerModal
          open={open}
          setOpen={setOpen}
          handleAddItem={handleAddTechs}
          labelOne={"Tecnologia"}
          labelTwo={"Status"}
          techsModal={techsModal}
        />
      )}
      {worksModal && (
        <ConteinerModal
          open={open}
          setOpen={setOpen}
          handleAddItem={handleAddWorks}
          labelOne={"Trabalhos"}
          labelTwo={"Descrição"}
          labelThree={"Url_Deploy ex: https://kenziehub.me"}
        />
      )}
      {remove && (
        <ConteinerModal
          open={open}
          setOpen={setOpen}
          labelOne={"Trabalhos"}
          labelTwo={"Status"}
          remove={remove}
          setRemove={setRemove}
          handleFilter={handleFilter}
          itemRemove={itemRemove}
        />
      )}

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
            handleModalFilter={handleModalFilter}
          />
          <MiddleCards
            tytle={"Meus Trabalhos"}
            handleOnRender={handleOnRender}
            getUserItem={getUserItem.works}
            handleModalFilter={handleModalFilter}
          />
          <aside>
            <div>
              <img
                src="https://voceconstroi.fbitsstatic.net/img/p/perfil-redutor-eucafloor-smart-oak-1-80m-70857/257545.jpg?w=420&h=420&v=no-change&qs=ignore"
                alt="img_perfil"
              />
              <div>
                <h3>{storage.name}</h3>
                <p>{storage.bio}</p>
                <span>{storage.course_module}</span>
              </div>
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
