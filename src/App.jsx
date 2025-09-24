import {} from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Container from './Components/Container'

function App() {
  

  return (
    <div>
    <Navbar></Navbar>
    <Container>
         <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] my-[50px]'>
      <div className='rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center'>
        <h1 className='font-bold text-[35px]' >Pending</h1>
        <p className='font-semibold text-[26px]'>0</p>

      </div>
        <div className='rounded-md p-7 text-white h-[250px] bg-purple-600 flex flex-col items-center'>
               <h1 className='font-bold text-[35px]' >Submitted</h1>
        <p className='font-semibold text-[26px]'>0</p>

      </div>
        <div className='rounded-md p-7 text-white h-[250px] bg-teal-600 flex flex-col items-center'>
               <h1 className='font-bold text-[35px]' >Reviewed</h1>
        <p className='font-semibold text-[26px]'>0</p>

      </div>

    </div>
    </Container>
    <Footer></Footer> 
    </div>
  )
}

export default App
