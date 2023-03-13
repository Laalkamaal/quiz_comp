import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Play from './pages/Play';
import Quiz from './pages/Quiz';
import Authenticate from './pages/Authenticate';
import HomeCard from './components/HomeCard';
import "./Styling/Create.css"
import ContextApiapp from './ContextAPIApp/ContextApiapp';
import 'bootstrap';
import { Navbar } from 'react-bootstrap';


function App() {
  return (
    
    
      <BrowserRouter>
      <div>
        <Navbar/>
      
      <Routes>
          <Route exact path="/create" element={<Create/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/play" element={<Play/>}/>
          <Route exact path="/quiz" element={<Quiz/>}/>

          {/* //<Route exact path="/" element={<One/>}/> */}
         
          <Route exact path="/authenticate" element={<Authenticate/>}/>
          <Route exact path="/check" element={<ContextApiapp/>}/>
          
        </Routes> 

      </div>
       
      </BrowserRouter>
      
    
    
  )
}

export default App;
