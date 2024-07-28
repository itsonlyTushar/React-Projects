import React from 'react'
import {Flipper,Flipped} from 'react-flip-toolkit'

function Flashcards({question,reavealAnswer,showAnswer,answer}) {
  return (
       <>
      <Flipper flipKey={showAnswer}>
      <div className='flashcard-container' onClick={reavealAnswer}>
      <Flipped flipId="card">
          <div className={`flashcard ${showAnswer ? 'flipped' : ''}`}>
            <div className="front">{question}</div>
               <div className="back">{answer}</div>
          </div>
        </Flipped>
      </div>

      </Flipper>
      </>
    )
}


export default Flashcards