import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, About, Projects, Contact} from './pages';
import Loading from './pages/Loading';



const App = () => {
  return  (
     <main className="h-[100vh]">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/" element={<Loading/>}/> */}
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
     </main>
  )
}

export default App