
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

const App = () => {
  return (
    <div className='dark:bg-gray-950 dark:text-white'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetails/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App