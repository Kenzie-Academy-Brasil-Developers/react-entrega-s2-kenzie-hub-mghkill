import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./GlobalStyled";

import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
