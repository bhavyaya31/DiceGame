import StartGame from "./Components/StartGame";
import { useState } from "react";
import GamePlay from './Components/GamePlay'
function App() {
const [IsGameStarted, setIsGameStarted] = useState(false);
const toggleGamePlay=()=>{
  setIsGameStarted((prev)=> !prev);
}
  return (
    <>
    {
      IsGameStarted ? <GamePlay/>  : <StartGame toggle={toggleGamePlay}/>
    }
    
    </>
  )
}

export default App

  