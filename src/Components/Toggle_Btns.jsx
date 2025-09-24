import React from 'react';
import Container from './Container';

const Toggle_Btns = ({toggleStatus,setToggleStatus}) => {
  //const[toggleStatus,setToggleStatus]=useState('All');

    return (
        <div>
            <Container>
    <div className='text-right mb-[50px]'>
    <button className={` toggle-btn rounded-l-md ${toggleStatus=== "All" && "!text-white  !bg-purple-500"}`} onClick={() => setToggleStatus("All")}>All</button>
    <button className={` toggle-btn ${toggleStatus=== "Pending" && "!text-white  !bg-purple-500"}`} onClick={() => setToggleStatus("Pending")}>Pending</button>
    <button className={` toggle-btn ${toggleStatus=== "Submitted" && "!text-white  !bg-purple-500"}`} onClick={() => setToggleStatus("Submitted")}>Submitted</button>
    <button className={` toggle-btn rounded-r-md ${toggleStatus=== "Reviewd" && "!text-white  !bg-purple-500"}`} onClick={() => setToggleStatus("Reviewd")}>Reviewd</button>

    
    

    
    
  </div>
  
</Container>
        </div>
    );
};

export default Toggle_Btns;