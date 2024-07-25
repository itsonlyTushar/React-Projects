import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcards'
import flashcards from './constants/flashcards.json' 
import { FaGithub } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";

function App() {
  const [cards,setCards] = useState(0)
  const [showAnswer,setShowAnswer] = useState(false)


  const reavealAnswer = ()=>{
    setShowAnswer(true)
    setTimeout(()=>{
      setShowAnswer(false)
      setCards((prev) => prev + 1 )
    },2000)

}

  return (
    <>
      <div  className='card flex flex-col items-center justify-center h-screen 
      bg-blue-100'
      style={{ backgroundImage: 'url(https://softauthor.com/wp-content/uploads/2016/08/javascript-1024x576.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      

            <h1 className='text-4xl font-bold mb-4'>JAVSCRIPT HUNT</h1>
      {
      cards < flashcards.length &&
      <Flashcard  question={flashcards[cards].question} 
                  answer={flashcards[cards].answer}
                  reavealAnswer={reavealAnswer}
                  showAnswer={showAnswer}
                  
      />}
      <div className='my-4 flex gap-3'>
       <a href="https://github.com/itsonlyTushar" className='text-3xl'><FaGithub /></a>
       <a href="https://github.com/itsonlyTushar" className='text-3xl'><TbSourceCode /></a>
      </div>
      
      </div>
    

    </>
  )
}

export default App

// https://wallpaperaccess.com/full/3908528.jpg