import { Link } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
 
 <div className='w-full bg-pink-300 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
              <div className='hover:underline font-mono'>Produtos</div>
              <div className='hover:underline font-mono' >Categorias</div>
              <div className='hover:underline font-mono'>Cadastrar categoria</div>
              <div className='hover:underline font-mono'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar