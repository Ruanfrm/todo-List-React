import {Container, Area, Header} from "./App.styles";
import {Item} from "./types/items"
import { ListItem } from "./components/Listitem";
import { useState } from "react";
import {AddArea} from "./components/addArea"
import './App.css';

function App() {

  const [list, setList] = useState<Item[]>([
    { id: 0, name: 'Comprar Pão', done: false },
    { id: 1, name: 'Comprar Ovo', done: true },

  ]);

   const handleAddTask = (taskName: string) => {
    let newlist = [...list];
    newlist.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newlist)
  }
  
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>


      {/* Area de adcionar tarefas */}

         <AddArea 
         onEnter={handleAddTask}
         />



            {/* Lista de tarefas*/}

        {list.map((item, index)=>(
          <ListItem key={index}
                   item={item}
                   onChange={handleTaskChange}         
                     />
        ))}


      </Area>
    </Container>
  );
}

export default App;
