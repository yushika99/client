import Reactfrom from 'react';
import Task from './Tasks'
import{paper,TextField}from '@material-ui/core';
import './App.css';
import Tasks from './Tasks';

class App extends Tasks {
  state={tasks:[],currentTask:""}
  render(){
    return(
    <div className= "App flex">
      <paper elevation ={3}>

      </paper>
      
    </div> );
  }
}

export default App;
