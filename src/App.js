import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
