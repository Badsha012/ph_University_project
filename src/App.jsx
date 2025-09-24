import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Container from './Components/Container'

function App() {

  const[toggleStatus,setToggleStatus]=useState('All');
  console.log(toggleStatus);
  

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
  {/* Toggle buttons */}
<Container>
    <div className='text-right mb-[50px]'>
    <button className={` toggle-btn rounded-l-md ${toggleStatus=== "All" && "!text-white  !bg-purple-500"}`} onClick={() => setToggleStatus("All")}>All</button>
    <button className=' toggle-btn ' onClick={() => setToggleStatus("Pending")}>Pending</button>
    <button className=' toggle-btn ' onClick={() => setToggleStatus("Submitted")}>Submitted</button>
    <button className=' toggle-btn rounded-r-md' onClick={() => setToggleStatus("Reviewd")}>Reviewd</button>

    
    

    
    
  </div>
  
</Container>

    <Footer></Footer> 
    </div>
  )
}

export default App
