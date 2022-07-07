import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import New from "./pages/New";
// styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurants" element={<Home />} />
        <Route path="/restaurants/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
