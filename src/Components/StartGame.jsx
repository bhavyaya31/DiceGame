import styled from "styled-components";
import { Button} from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>

        <img src="/images/dices 1.png" alt="dice logo" />
        </div>

        <div className="content">
            <h1>DICE GAME </h1>
        
        
           <Button onClick={toggle}>Play Now</Button>
            </div>
      
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    margin:0 auto;
    height:100vh;
    height: calc(100vh - 72px);
   max-width: 1440px;
    justify-content: space-around;
    


color: #000000;

.content {
    align-items: end;
    margin-top: 40vh;
    h1{
       
font-size: 96px;
white-space: nowrap;
}
}

`

