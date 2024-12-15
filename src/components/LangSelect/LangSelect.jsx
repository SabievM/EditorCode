import React from "react";

import './LangSelect.css'
import { LANGUAGES } from "../../constatnts";

const languages = Object.entries(LANGUAGES)

const LangSelect = ({onSelect}) => {
    return (
        <>
        <div className="select-container">
            <div>
            <p className="select-title">Выберите язык программирования</p>
            <select className="select-options" onChange={(e) => onSelect(e.target.value)}>
                {languages.map((lang) => 
                    <option className="select-item" key={lang[0]} value={lang[0]}>{lang[0]}</option>
                )}      
            </select>
            </div>
        </div>
        
        </>
        
    )
};

export default LangSelect;