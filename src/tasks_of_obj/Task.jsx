import React, { useState } from "react";

export default function Task(){
    const initNotes = [
        {
          id: '345',
          prop1: 'value11',
          prop2: 'value12',
          prop3: 'value13'
        },
        {
          id: '34',
          prop1: 'value21',
          prop2: 'value22',
          prop3: 'value23'
        },
        {
          id: '3',
          prop1: 'value31',
          prop2: 'value32',
          prop3: 'value33'
        },
      ];
      const [notes, setNotes] = useState(initNotes);
      const [editId, setEditId] = useState(null)

    const result = notes.map(note => {
    return <p key={note.id}>
      <span> {note.prop1} </span>,
      <span> {note.prop2} </span>,
      <span> {note.prop3} </span>
      <button onClick={() => setEditId(note.id)}>edit</button>
    </p>;
  });


  function getValue(prop){
    return notes.reduce((res, note) => note.id === editId ? note[prop] : res, '');
  }
  
  
  
  function changeItem(prop, event) {
    setNotes(notes.map(note =>
      note.id === editId ? {...note, [prop] : event.target.value} : note
      ));
  }
  
  
  
    return <div>
      
     {result}
     <input value={getValue('prop1')} onChange={event => changeItem('prop1', event)} />
     <input value={getValue('prop2')} onChange={event => changeItem('prop2', event)} />
     <input value={getValue('prop3')} onChange={event => changeItem('prop3', event)} />
     <button onClick={() => setEditId(null)}>save</button>
     
    </div>  
}