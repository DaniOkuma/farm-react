import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ListarCategorias from './components/categoria/listacategorias/ListarCategorias'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/categorias' element={<ListarCategorias />} />
          <Route path='/cadastrarcategoria' element={<FormCategoria />} />
          <Route path='/editarcategoria/:id' element={<FormCategoria />} />
          <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />
        </Routes>
  
        
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App