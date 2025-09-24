import React from "react";
import Container from "./Container";

const Toggle_Btns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewd"];

  return (
    
      <Container>
        <div className="text-right mb-[50px]">
        
        {
            btns.map((btn,index) => {
                return <button
                key={index}
            className={`${index===0 && "rounded-l-md"} ${index===btns.length-1 && "rounded-r-md"} toggle-btn rounded-l-md ${
              toggleStatus === btn && "!text-white  !bg-purple-500"
            }`}
            onClick={() => setToggleStatus(btn)}
          >
            {btn}
          </button>
            })
        }



        </div>
      </Container>
    
  );
};

export default Toggle_Btns;
