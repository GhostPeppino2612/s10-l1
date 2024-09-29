import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNavbar from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import list from "../src/scifi.json"
import Booklist from "./components/Booklist";


function App() {
  return (
    <>
    <MyNavbar />
    <Welcome />
    <Booklist array={list} />
    <MyFooter />
    </>

  );
}

export default App;
