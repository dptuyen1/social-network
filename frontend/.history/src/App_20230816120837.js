import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </>
  );
};

export default App;
