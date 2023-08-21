import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
