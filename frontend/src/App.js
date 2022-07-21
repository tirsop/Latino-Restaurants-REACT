import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// pages
import Home from "./pages/Home";
import New from "./pages/New";
// styles
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/new" element={<New />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </main>
  );
}

export default App;
