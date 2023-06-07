import styled from 'styled-components'
const SelectNumber = ({selectNumber,setselectNumber,error}) => {
    const arrNumber=[1,2,3,4,5,6] 
   
  
  
    return (
        <SelectNumberContainer>
        <p className='error'>{error}</p>
          <div className='flex'>
      {arrNumber.map((value,i)=>(
          <Box isSelected={value===selectNumber} key={i} onClick={()=> setselectNumber(value)}>
        {value}
        </Box>
        ))}      
        </div>
        <p>Select Number</p>
        </SelectNumberContainer>
       
);
};
export default SelectNumber

const Box = styled.div`
height: 72px;
width: 72px;
border: 2px solid black ;
display:grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>props.isSelected ? "black" : "white"};
color: ${(props)=>props.isSelected ? "white" : "black"};
`
const SelectNumberContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap:24px;

}
p{
    font-size:24px;
    font-weight: 700;

}
.error{
    color: red;
    font-size: small;
    font-weight: 400;
}
`