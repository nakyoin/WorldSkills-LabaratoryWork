import React, { useState } from "react";
import '../App.css'

export default function Task3() {

    

    const [notes, setNotes] = useState(['Todo', 'Task', 'ABCDEFG']);
    const [value, setValue] = useState('')
    const [checked, setChecked] = useState(true);
    
    
    
        const result2 = notes.map((note, index) => {
          return <ul  key={index}> <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />  {note} <span>{checked ? 'Задание выполнено!' : ''}</span> <a onClick={() => remItem(index)}> ㅤ[Delete] </a> </ul> ;
          
        });
    
        function remItem(index) {
            setNotes([notes.slice(0, index), ...notes.slice(index + 1)]);
          }
    
    
    
    
      return <div>
            <h1 className='todos' >todos</h1>
      
      
    <div>
    <input className='inputhead' placeholder=' Add Todo...' value={value} onChange={event => setValue(event.target.value)} >
    </input>
    <a className='headbutton' onClick={() => setNotes([...notes, value])}>ㅤSubmit</a>
    </div>
    <div className='tasks'>
     {result2}
      </div>
      <input type='checkbox'></input>
    
    
      </div>
    }
        


    
