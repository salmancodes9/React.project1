import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Button from './Components/SearchBar/SearchBar'
import Footer from './Components/Footer/Footer'
import SearchBar from './Components/SearchBar/SearchBar'
import { Routes , Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Product from './Pages/Product/Product'


const App = () => {

 
 
  return (
    
    <>

      <Navbar />
   
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/product/:id' element={<Product/>}/>
     </Routes>

      <Footer/>
    </>
  )
}

export default App
