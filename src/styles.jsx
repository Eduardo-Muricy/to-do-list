import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
export const Container = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
 background: linear-gradient(90deg,#383838 0%,#000000 81.25%); 
 width: 100vw;
  height: 100vh;
;

`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
padding: 30px 20px;
background-color: rgba(255, 255, 255, 1);
border-radius: 5px;
;

`
export const InputAbutton = styled.div`
display: flex;
align-items: center;
margin-bottom:40px;
`
export const Input = styled.input`

width: 342px;
height: 40px;
border-radius: 5px;
border: 2px solid rgba(209, 211, 212, 0.4);

font-size: 15px;
font-weight: 400;
line-height: 18px;
padding-left: 15px;
color: black;
font-size: 15px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
text-align: left;

`

export const Button = styled.button`
width: 130px;
height: 40px;
margin-left: 40px;
border: none;
border-radius: 5px;
background: rgba(128, 82, 236, 1);
font-size: 17px;
font-weight: 900;
line-height: 3px;

text-align: center;
color: rgba(255, 255, 255, 1);

cursor: pointer;
&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.6;
}
`




export const ListItem = styled.div`

display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
padding: 0 15px;
height: 60px;
border-radius: 5px;
margin-top: 30px;

background: ${(props)=>props.$isFinished ? '#e8ff8b' : '#e4e4e4'};
box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
list-style-type: none;
`

export const Task = styled.li`


font-size: 15px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
`

export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
width: 20px;
height: 20px;
`

export const Check = styled(FcCheckmark)`
width: 20px;
height: 20px;
cursor: pointer;
`