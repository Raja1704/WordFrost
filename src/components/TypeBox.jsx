import { useState, useRef } from "react";


const getSentence = () =>`import React from 'react' 
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
        <App />
        </React.StrictMode>,
    )
`.split(' ')

const TypeBox = () =>{
    const [userInput, setuserInput] = useState('')
    const Sentence = useRef(getSentence())
    const [activeWord, setActiveWord] = useState(0)

    function processInput(value){
        if(value.endsWith(' ')){
            setActiveWord(
                index => index+1 
            )
            setuserInput('')
        }else{
            setuserInput(value)
        }  
    }

    return(
        <div>
                <p>{
                    Sentence.current.map((word, index) =>{
                            if(index == activeWord){
                                return <b>{word} </b>
                            }

                            return <span>{word} </span>
                      })
                }</p>



                <input 
                      type     = "text" 
                      value    = {userInput}
                      onChange = {
                                  (e) =>
                                    processInput(e.target.value)
                            }     
                      
                />
        </div>
    )
}


export default TypeBox ;