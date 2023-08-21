import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./components/Home";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
