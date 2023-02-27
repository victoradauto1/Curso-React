
import './App.css'
import StartScreen from './components/StartScreen'
import { useCallback, useEffect, UseEffect, UseState} from "react"
import {wordsList} from './data/words'
import { useState } from 'react';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"}
];

function App() {
  
  const [gameStage, setGameStage] =useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickedWordAndCategory = () =>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length) ]

    console.log(category)

    const word = words[category][Math.floor(Math.random() * words[category].length) ]

    console.log(word)
    return {word, category}
  }


  const startGame = useCallback(() =>{
    
    clearLettersState();

    const {word, category} = pickedWordAndCategory();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  });

  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    //checando a validação das letras 

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
   
   }

   if (letters.includes(normalizedLetter)){
    setGuessedLetters ((actualGuessedLetters) => [
      ...actualGuessedLetters, normalizedLetter]
  )} else {
    setWrongLetters ((actualWrongLetters) => [
      ...actualWrongLetters, normalizedLetter])

    setGuesses((actualGuesses) => actualGuesses - 1)
   }
  }

  const clearLettersState =()=> {
    setGuessedLetters([])
    setWrongLetters([])
  }
 
  //checando se as tenttivas terminaram e consequente derrota
  useEffect(() =>{
    if(guesses <= 0){
      clearLettersState()
      setGameStage(stages[2].name)
    }

   }, [guesses]);
   
  //checando condição de vitória
  useEffect(()=>{

    const uniqueLetters = [...new Set(letters)] //o Set é uma expressão que opera fazendo com que os itens de uma lista não possam ser repetidos.

    if(guessedLetters.length === uniqueLetters.length){

      setScore((actualScore) => actualScore += 100 )

      startGame();
    
    }


  }, [guessedLetters, letters, startGame])

  const retry = () =>{
    setScore(0);
    setGuesses(3);

    setGameStage(stages[0].name)
  }

  
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters = {letters}
      wrongLetters = {wrongLetters}
      guesses = {guesses}
      score = {score}
      guessedLetters = {guessedLetters}
      />}
      {gameStage === "end" && <GameOver 
      retry={retry}
      score={score}
      />}
    </div>
  )
}

export default App
