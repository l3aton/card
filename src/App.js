import NavBar from "./components/NavBar.js";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.js";
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
