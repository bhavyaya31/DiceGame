import React from 'react'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import styled from 'styled-components';
import RoleDice from './RoleDice';
import {useState} from 'react';
import { Button} from "../styled/Button";
import Rules from './Rules';

const GamePlay = () => {
  const [selectNumber, setselectNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState(" ");
  const [showRules,setshowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice=()=> {
    if(!selectNumber){
seterror("You have not selected any number!")
      return;
    } 
   
      seterror("")

  const randomNumber =  generateRandomNumber(1,7);
  setcurrentDice((prev) => randomNumber);
  
  if(selectNumber===randomNumber){
    setscore((prev)=>prev+randomNumber);
  }
  else{
    setscore((prev)=> prev - 2);
  }
  setselectNumber(undefined)  //to deselect the number after one iteration done
  }

  const resetScore =()=>{
    setscore(0);
  }
 
 
  return (
    <MainContainer>

  <div className='top_section'>
    <TotalScore score={score}/>
    <SelectNumber selectNumber={selectNumber} setselectNumber={setselectNumber} error={error}/>
  </div>
  <RoleDice currentDice={currentDice} roleDice={roleDice}/>
  <div className='btns'>
    <Button onClick={resetScore}>Reset Score</Button>
    <Button onClick={()=>setshowRules((prev)=> !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
  
  </div>
  {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay

const MainContainer = styled.main`
padding: 70px;
.top_section{
  display:flex;
  justify-content: space-between;
  align-items: end;
}
.btns{
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items:center;
  margin-top: 40px;
}
  
`
