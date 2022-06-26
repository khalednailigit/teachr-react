import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
