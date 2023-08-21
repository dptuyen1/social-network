import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<postMessage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
