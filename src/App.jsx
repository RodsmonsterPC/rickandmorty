import { Routes, Route } from "react-router-dom";
import "./App.css";
import Characters from "./pages/Characters";
import Detail from "./pages/Detail";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path={`/detail/:id`} element={<Detail />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </main>
  );
}

export default App;
