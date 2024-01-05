import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Films} from "./pages/Film";
import {Contacts} from './pages/ContactUs';
import {Error} from "./pages/ErrorPage";
import { Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/films" element={<Films />}/>
        <Route path="/contact" element={<Contacts />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
