import { Editor } from "@monaco-editor/react"
import React, { useRef, useState } from "react"
import './CodeEditor.css'
import LangSelect from "../LangSelect/LangSelect";
import Rezult from "../Rezult/Rezult";








const CodeEditor = () => {

    const [value, setValue] = useState();
    const [language, setLanguage] = useState('javascript')
    const editorRef = useRef;

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    } 

    const onSelect = (language) => {
        setLanguage(language)
    };

    console.log(language)
    return (
        <>
        <div className="editor">
            <div className="title">
                <p className="title-text">Добро пожаловать в онлайн редактор кода</p>
            </div>
            
          
            <LangSelect onSelect={onSelect}/>
            <Editor
                height="50vh"
                options={{
                    theme: "vs-dark",
                }}
                marginTop="10px"
                onMount={onMount}
                language={language}
                
                value={value}
                onChange={(value) => {
                    setValue(value)
                }}
            />
            <Rezult value={value} language={language}/>
        </div>
            
        </>
    )
}

export default CodeEditor;
