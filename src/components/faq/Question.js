import React ,{useState} from 'react';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";

const Question = ({title,answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
const handeleClick=()=>{
    setShowAnswer(!showAnswer);
}

    return (
        
             <div className=' container question' >
                 <div className='question-title'>
                        <h2>{title}</h2>
                        <button onClick={handeleClick}>
                            <AiOutlinePlus  color='#1f93ff' />
                        </button>
                    </div>
                    <div className='question-answer'>
                        {
                            showAnswer && <p>{answer}</p>
                        }
                        
                    </div>
                 </div>
        
    );
}

export default Question;
