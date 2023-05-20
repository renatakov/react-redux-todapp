import TodoAppContainer from "./redux/TodoAppContainer";
import Header from "./Components/Header/Header.jsx";
import {Routes, Route} from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts"
const App = () => {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<TodoAppContainer/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default App;
