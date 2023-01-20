import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tasks from './tasks_of_obj/Tasks';
import Task from './tasks_of_obj/Task';
import Redact from './redact/Redact'
import Task3 from './components/Task3'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Task />
    <Tasks/>
    <Redact />
    <Task3 />
  </React.StrictMode>
);

