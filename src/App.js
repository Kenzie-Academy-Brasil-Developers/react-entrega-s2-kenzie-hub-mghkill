import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./GlobalStyled";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes />
    </div>
  );
};

export default App;
