import React, { useState, useEffect} from "react"

const Button = (props)=> {
    const { p_id } = props;
        
        useEffect(()=> {
         var id_txt = document.getElementById(p_id); // ВЫВОД за компонент
         id_txt.innerText = `OUT ${click}`;
        })
        const [click, setClick] = useState(0)
        return(
            <div className="btn_1">
            <h1>in = {click}</h1> {/*Вариант вывода внутри компонента */}
            <button  onClick={() => {setClick(click + 1);}}>
                {props.text} +
            </button>
            <button  onClick={() => {
                if(click === 0) {
                    
                }else {setClick(click - 1);}
            }}>
                Уменьшить -
            </button>
            </div>
        ) 
        }
 
export default Button