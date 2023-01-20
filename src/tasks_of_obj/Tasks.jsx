import React, { useState } from "react";


export default function Tasks(){
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
  
  const initProds = [
        {id: '1', name: 'prod1', catg: 'catg1', cost: 100},
        {id: '2', name: 'prod2', catg: 'catg2', cost: 200},
        {id: '3', name: 'prod3', catg: 'catg3', cost: 300},
      ];
      
    const [cats, setCats] = useState(initProds);
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('') 
    const [value3, setValue3] = useState('')
    const [editId, setEditId] = useState(null);
    const[obj,setObj] = useState(initProds);
    const[editId1, setEditId1] = useState(null);
      
      const res = cats.map(note => {
        return <p key={note.id}>
          <table border='2'><tr><td> {note.name}</td><td> {note.catg}</td><td> {note.cost}</td> 
          <td><button onClick={() => remItem(note.id)}>Del</button></td>
          <td><button onClick={() => setEditId(note.id)}>edit</button></td>
          <td><button onClick={() => setEditId1(note.id)}>edit (universal)</button></td>
          </tr> </table>
          </p>
      });
      
      
      function addItem() {
        let object = {
          id: '1233',
          name: value1,
          catg: value2,
          cost: value3,
        }
        setCats([...cats, object]);
      }
      
      function getValue1(prop) {
        if (editId) {
          return initProds.reduce ((res, note) => note.id === editId1 ? note[prop] : res, '');
        } else {
          return obj[prop];
        }
      }

      function remItem(id) {
        setCats(cats.filter(note => note.id !== id));
      }
      
      
      function getValue(prop){
        return cats.reduce((res, note) => note.id === editId ? note[prop] : res, '');
      }
      
      
      
      function changeItem(prop, event) {
        setCats(cats.map(note =>
          note.id === editId ? {...note, [prop] : event.target.value} : note
          ));
      }


      function changeItem1(prop, event) {
        if (editId1) {
          setCats(cats.map(note =>
            note.id === editId1 ? {...note, [prop] : event.target.value} : note
            ));
        } else {
          setObj({...obj, [prop] : event.target.value});
        }
      } 

      function saveItem() {
        if (editId1) {
          setEditId1(null)
        } else {
          setCats([...cats, obj]);
          setObj(initProds());
        }
      }










      return <div>
          {res}
          <br />
      <br />
      <h3>Добавление значения</h3>
      <input value={value1} onChange={event => setValue1(event.target.value)} />
      <input value={value2} onChange={event => setValue2(event.target.value)} />
      <input value={value3} onChange={event => setValue3(event.target.value)} />

      <button onClick={addItem}>save</button>

<br />
<h3>Изменение значения</h3>
      <input value={getValue('name')} onChange={event => changeItem('name', event)} />
     <input value={getValue('catg')} onChange={event => changeItem('catg', event)} />
     <input value={getValue('cost')} onChange={event => changeItem('cost', event)} />
     <button onClick={() => setEditId(null)}>save</button>
      
< br /> <br /> <h3>Универсальная версия инпутов</h3> <p>(перед обычным эдитом попробуйте этот, т.к. они конфликтуют и работают неккоректно)</p>
     <input value={getValue1('name')} onChange={event => changeItem1('name', event)} />
     <input value={getValue1('catg')} onChange={event => changeItem1('catg', event)} />
     <input value={getValue1('cost')} onChange={event => changeItem1('cost', event)} />
     <button onClick={saveItem}>save</button>















         </div>
        





      }