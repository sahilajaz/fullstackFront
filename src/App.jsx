import Navbar from './Components/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import AddUser from './User/AddUser';
import EditUser from './User/EditUser';
import ViewUser from './User/ViewUser';


function App() {
 

  return (
     <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/adduser' element={<AddUser/>}/>
       <Route path='/edituser/:id' element={<EditUser/>}/>
       <Route path='/Viewuser/:id' element={<ViewUser/>}/>
      </Routes>
      </Router>
     </div>
  )
}

export default App
