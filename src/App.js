import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./GlobalStyled";
import Routes from "./Routes";

const App = () => {
  const [backGround, setBackGround] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("@ken:user");
    if (user) {
      return setBackGround(true);
    }
  }, []);
  return (
    <div>
      <GlobalStyle backGround={!!backGround} />
      <Routes setBackGround={setBackGround} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
