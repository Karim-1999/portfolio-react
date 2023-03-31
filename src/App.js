import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Certifications from "./components/Certifications/Certifications";
import Home from "./Home";
import Portfolio2 from "./components/Portfolio2/Portfolio2";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, 
  {
    path: '/certifications',
    element: <Certifications />
  }, 
  {
    path: '/portfolio',
    element: <Portfolio2 />
  }, 
  
  // Creare nuovo oggetto con path: "/Nome della pagina" e element: "Nome del Component"
])




function App() {



  return (
    
      <RouterProvider router={router} />
      
   
  );
}

export default App;
