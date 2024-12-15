import React, { useState, version } from "react";


import './Rezult.css'
import { LANGUAGES } from "../../constatnts";
import axios from "axios";


const Rezult = ({value, language}) => {

    const [output, setOutput] = useState();
    const runCode = async() => {
        if (!value) return;
        try {
            const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
                
                language: language,
                version: LANGUAGES[language],
                files: [
                    {
                        content: value
                    }
                ]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            setOutput(response.data.run)
            console.log(response.data.run); 
        } catch(err) {
            console.log(err)
        }
    } 

    return (
        <>
        <button onClick={runCode} className="select-button">запустить</button>
        <div className="container-rezult">
            
            {output ? (
                <>
                    <p>{output.output}</p>
                    <p>status: {output.code}</p>
                </>
            ) : 'Поле для вывода результата'}
            
        </div>
        </>
        
    )
};
export default Rezult;