import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Container, ContainerItens, InputAbutton, Input, Button, ListItem, Task, Trash, Check } from './styles';
function App() {
  const [list, setList] = useState([])
  const [inputTask, setinputTask] = useState('')



  function inputChangee(e) {

    setinputTask(e.target.value)
  }

  function clickOnbutton() {

    if(inputTask){
      setList([...list, { id: uuidv4(), task: inputTask, finished: false }])
    }else{
      alert('Adicione uma tarefa')
    }
   

  }

  function finishTask(id) {
    const newList = list.map(item => (

      item.id === id ? { ...item, finished: !item.finished } : item

    ))
    setList(newList)
  }

  function deletTask(id) {
    const deletedTask = list.filter((item) => item.id !== id)

    setList(deletedTask)

  }

  return (

    <Container>
      <ContainerItens>
        <InputAbutton>
          <Input onChange={inputChangee} type="text" placeholder='O que tenho que fazer...' />
          <Button onClick={clickOnbutton}>Adicionar</Button>
        </InputAbutton>


        <ul>

          {
            list.length > 0 ? (

              list.map((item) => (
                <ListItem key={item.id} $isFinished={item.finished}>
                  <Check onClick={() => finishTask(item.id)} />
                  <Task>{item.task}</Task>
                  <Trash onClick={() => deletTask(item.id)} />
                </ListItem>
              ))
            ): <p> Não há tarefas na lista...</p>
            }
        </ul>


      </ContainerItens>
    </Container>

  )
}

export default App
