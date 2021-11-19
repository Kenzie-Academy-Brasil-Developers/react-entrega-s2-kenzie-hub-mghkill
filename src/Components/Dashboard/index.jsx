import { Redirect } from "react-router";

const Dashboard = ({ allowed }) => {
  if (!allowed) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <header>
        <h1>
          Kenzie <span>Hub</span>
        </h1>
        <img
          src="https://voceconstroi.fbitsstatic.net/img/p/perfil-redutor-eucafloor-smart-oak-1-80m-70857/257545.jpg?w=420&h=420&v=no-change&qs=ignore"
          alt="perfil_img"
        />
      </header>
      <main>
        <section>
          <div>
            <h3>Minhas Tecnologias</h3>
          </div>
        </section>
        <section>
          <div>
            <h3>Meus Trabalhos</h3>
          </div>
        </section>
        <section>
          <div>
            <img
              src="https://voceconstroi.fbitsstatic.net/img/p/perfil-redutor-eucafloor-smart-oak-1-80m-70857/257545.jpg?w=420&h=420&v=no-change&qs=ignore"
              alt="img_perfil"
            />
            <h4>Nome de usuário</h4>
          </div>
          <div>
            <div>
              icone de celular
              <span>Ligar agora</span>
              <p>+55 (84) 98100-2211</p>
            </div>
            <div>
              icone de celular
              <span>Enviar email</span>
              <p>samuel@teste.com.br</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Dashboard;
