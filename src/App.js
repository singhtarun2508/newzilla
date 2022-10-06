import logo from './logo.svg';
import './App.css';
import News from './Components/News';
import Spinner from './Components/Spinner';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import { useState } from 'react'

import { location } from './Components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, useLocation
} from "react-router-dom";


function App() {
  const [Value, setValue] = useState("")
  const [local, setlocal] = useState(Value)

  const Change = (event) => {
    setValue(event.target.value)
  }

const Search=()=>{
  setlocal(Value)
}


  return (
    <Router>
      <div>

        <Navbar value={Value} search={Search} Change={Change} />


        <Routes>
          <Route path="/technology" element={<News key="technology" category="technology" />} />
          <Route path="/business" element={<News key="business" category="business" />} />
          <Route path="/sports" element={<News key="sports" category="sports" />} />
          <Route path="/health" element={<News key="health" category="health" />} />
          <Route path="/home" element={<News key="general" category="general" />} />
          <Route path="/science" element={<News key="science" category="science" />} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route path="/" element={<News key="home" category="general" />} />


          <Route path={`/filter=${local}`} element={<News key={local} value={Value} />} />




        </Routes>
      </div>
    </Router>);


}



// {  console.log(Value)}
export default App;

















