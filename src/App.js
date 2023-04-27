import {BrowserRouter ,Routes ,Route } from "react-router-dom";
import './App.css';
import Welcome from "./components/Welcome";
import Home from './components/Home';
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
      {/* <BrowserRouter>
        <Routes>
            < Route path="/" element={< Home />} />
            < Route path="/About" element={< About />} />
        
        </Routes>
      </BrowserRouter> */}
    < Welcome />
      <Welcome name="John"/>
      <Welcome name="Mary"/>
      <Welcome name="Alex"/>
    </>
  );
}

export default App;
