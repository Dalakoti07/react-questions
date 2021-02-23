import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showInfo,setShowInfo]=useState(false);

  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button onClick={()=>{setShowInfo(!showInfo)}} className="btn">
        {showInfo? <AiOutlinePlus/>:<AiOutlineMinus/>}
      </button>
    </header>
    {showInfo && info}
  </article>;
};

export default Question;