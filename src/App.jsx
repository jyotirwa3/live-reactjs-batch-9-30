import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Header from "./layout/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import SingleProduct from "./pages/SingleProduct"
import Update from "./pages/Update"
const App = () => {
  return (
   <Routers>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/view" element={<About/>} ></Route>
        <Route path="/about-us" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/singleProduct/:productId" element={<SingleProduct/>} ></Route>

        <Route path="/update/:id" element={<Update/>} />
        
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route/>
      </Routes>
   </Routers>
  )
}

export default App
