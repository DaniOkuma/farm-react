import { Link } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
 
 <div className='w-full bg-pink-300 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>
            
            <div className="flex gap-4">
                        <div className="cursor-pointer hover:underline">Produtos</div>
                        <Link to={`/categorias`} className="hover:underline">Categorias</Link>
                        <Link to={`/cadastrarcategoria`} className="hover:underline">Cadastrar categoria</Link>
              <div className='hover:underline font-mono'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar