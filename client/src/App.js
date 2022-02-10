import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import AddEdit from "./components/AddEdit";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/addEdit' element={<AddEdit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
