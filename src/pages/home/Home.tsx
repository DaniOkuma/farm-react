
function Home() {
    return (
        
            <div className="bg-pink-200 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Fármacia Asukari
                        </h2>
                        <p className='text-xl'>
                            Compre aqui seus medicamentos!
                        </p>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.pinimg.com/474x/1d/75/90/1d7590c3a2d904c7b81ce35e40c6de64.jpg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        
    )
}

export default Home