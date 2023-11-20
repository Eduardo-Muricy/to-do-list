import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FcCheckmark } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
import { Container, ContainerItens, InputAbutton, Input, Button,ListItem, Task } from './styles';
function App() {
  const [list, setList] = useState([{id:uuidv4(), task:"nada", finished:true}])
  const [inputTask, setinputTask] = useState('')
  

  
  function inputChangee(e) {
   
    setinputTask(e.target.value)
  }

  function clickOnbutton() {
    setList([...list,{id:uuidv4(), task:inputTask, finished:false}])
    
  }

  function finishTask(id){
    const newList= list.map(list =>{
      list.id===id ? {...list, finished:true}: list
    })

    setList(newList)
  }
 
  return (

    <Container>
      <ContainerItens>
        <InputAbutton>
          <Input onChange={inputChangee} type="text" placeholder='O que tenho que fazer...' />
          <Button onClick={clickOnbutton}>Adicionar</Button>
        </InputAbutton>
       
          
            <ul>
            {list.map((list) => (
            <ListItem key={list.id} isFinished={list.finished}>
              <FcCheckmark onClick={()=>finishTask(list.id)}/>
              <Task>{list.task}</Task>
              <FcEmptyTrash />
              </ListItem>
            ))

            }
            </ul>
          
        
      </ContainerItens>
    </Container>

  )
}

export default App
