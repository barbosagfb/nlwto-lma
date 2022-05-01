
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
// import ReactDOM from 'react-dom';
import {AuthContextProvider} from './contexts/AuthContext'
import { Room } from './pages/Room';



function App() {
  

    return(
  <Router>
   <AuthContextProvider>
    <Routes>
   <Route path="/" element= {<Home/>}/>
   <Route path="/rooms/new"element={<NewRoom/>}/>
   <Route path="/rooms/:id"element={<Room/>}/>
   </Routes>
   </AuthContextProvider>
   </Router> 
)}
export default App;

/* ReactDOM.render(
  <Router>
    <Routes>
   <Route path="/" element= {<Home/>}/>
   <Route path="/rooms/new"element={<NewRoom/>}/>
   </Routes>
   </Router> ,
document.getElementById("root")
); */