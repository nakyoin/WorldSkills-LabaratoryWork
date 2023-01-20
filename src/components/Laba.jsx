import React, { useState } from 'react';
import '../App.css';
import uuid from 'react-uuid';
export default function Laba() {
  function getInitObj() {
    return {
      id: uuid(),
      name: '',
      finished: false,
    }
  }

    const initNotes = [
        {id:'1',name:'Успеть на автобус',checks:true },
        {id:'2',name:'Вынести мусор',checks:true },
        {id:'3',name:'Вымыть посуду',checks:true },
        {id:'4',name:'Заставить соседа убираться в комнате',checks:true },
    ]
  const [notes, setNotes] = useState(initNotes);
	const [obj, setObj] = useState(getInitObj());
	const [editId, setEditId] = useState(null);

  const result = notes.map(note => {
        return <ul className = 'alltext' key={note.id}>
                <li><input type="checkbox" classNameName ='check' value = {note.finished} checked = {note.finished} onClick={(event)=>changeCheck(note.id)}/>ㅤ</li>
                <p>{note.finished}</p>
                <li className = {note.finished?'checked':'not_checked'} onClick = {() => setEditId(note.id)}  >  {note.name}</li>
          <a className = 'delete'onClick={() => delItem(note.id)}>ㅤㅤㅤㅤㅤㅤ[Delete]</a>
        </ul>;
      });
      function delItem(id){
        setNotes(notes.filter(note => note.id!==id))
    }

  function changeCheck(id){
		setNotes(notes.map(note =>note.id === id ? {...note,finished:!note.finished} : note));

    }
	
    function saveItem() {
      if (editId) {
        setEditId(null);
      } else {
        setNotes([...notes, obj]);
        setObj(getInitObj());
      }
    }

	function changeItem(prop, event) {
		if (editId) {
			setNotes(notes.map(note =>
				note.id === editId ? {...note, [prop]: event.target.value} : note
			));
		} else {
			setObj({...obj, [prop]: event.target.value});
		}
	}

  function getValue(prop) {
		if (editId) {
			return notes.reduce((res, note) => note.id === editId ? note[prop] : res, '');
		} else {
			return obj[prop];
		}
	}

	
	return <div>

        <h1 className='todos'>todos</h1>
		
    <input className='input' placeholder='Add Todo...' value={getValue('name')} onChange={event => changeItem('name', event)}/>
		
    <a className='btnsubmit' onClick={saveItem}>[Submit]</a>
    
    <div className='table'>
		{result}
    </div>

	</div>;
}
