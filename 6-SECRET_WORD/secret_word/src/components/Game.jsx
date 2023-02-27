import React from 'react';
import { useState, useRef } from 'react';
import './Game.css';

  const Game = ({
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    wrongLetters, 
    guesses, 
    score, 
    guessedLetters}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();

    verifyLetter(letter)

    setLetter('')

    letterInputRef.current.focus();
  }

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontução: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className='tip'>Dica sobre a palavra: <span>{pickedCategory}</span></h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i)=>(
          guessedLetters.includes(letter)? (
            <span  key={i} className="letter">{letter}</span>
          ) : (
            <span  key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tenta advinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name='letter' 
          maxLength="1" 
          required 
          onChange={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b, </span>
      </div>
        
    </div>
  )
}

export default Game