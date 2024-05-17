import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import React, { useRef } from 'react'
import { useState } from 'react';


function Monaco() {
  const[valor , setValor] = useState<string>("");
  //const editorRef = useRef("");
  //const handleSave = (editor)=>{
    //editorRef.current = editor
  //}
  //const save = () =>{const seccion:string = editorRef.current.getValue(); console.log(seccion)}
  const ejecutar = ()=>{
    var seccion:string = valor
    return seccion
  }
  return (
        <>
        <button onClick={ejecutar}></button>
        <Editor
            height='50vh'
            theme='light'
            defaultLanguage= 'html'
            value='Hola aqui escribiras html'
            onChange={(valor) => setValor(valor)}
        />
        <br/>
        <iframe id="visor" srcDoc={valor} ></iframe>
        </>
  )
}

export default Monaco

//value es par empezar con un valor
//capturar el valor getValue usando ref
//mas practica es utilizar el onCahnge
/*Hola aqui escribiras html
<h1 id="hs">hola mundo</h1>
<a href='https://www.linkedin.com/in/ignacio-villca-cayampi'> mi linkenid</a>
<style>
    h1 {color:red}
</style>*/