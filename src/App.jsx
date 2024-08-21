import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css"


function App() {  
  return (
     <Router>
      <Routes>
       <Route path="" element={<SearchBar/>}/>
      </Routes>
    </Router>
  );
}

export default App;