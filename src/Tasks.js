import { error } from 'console';
import react, {Component, component} from 'react';
import{ 
    addTask,
    getTask,
    updateTask,
    deleteTask
} from './services/taskServices';

class Task extends Component{
    state ={ tasks:[], currentTask:"" }
     

    async componentDidMount(){
        try {
            const {data} = await getTask();
            this.setState({task:data})
        } catch (error) {
            console.log(error);
            
        }
    }

    handelChange =({currentTarget: input}) => {
     this.setState({currentTask: input.value});

    }
   handelSubmit = async(e)=>{
       e.preventDefault()
       try {
           const{data} = await addTask({task: this.state.currenttask});
           const task = originalTask;
           task.push(data) 
           this.setState({tasks,currentTask:""});
       } catch (error) {
           console.log(error);
       }
   } 

   handelUpdate = async(currentTask)=>{
       const OriginalTasks = this.state.tasks;
       try {
           const tasks = [...originalTask];
           const index = tasks.findindex((task)=>task_id=== currntTask);
           task[index] = {...tasks[index]};
           task[index], completed = !task[index].completed;
           this.setState({tasks});
           await updateTask(currentTask,{completed:tasks[index].completed})
        } catch (error) {
           this.setState({tasks:OriginalTasks});
            console.log(error);
       }
   }

   handelDelete = async(currentTask)=>{
       const originalTasks = this.state.tasks;
    try {
        const tasks = originalTask.filte(
            (task) =>task_id!==currentTask
        );
        this.setState({tasks});
        await deleteTask(currentTask);
    } catch (error) {
        this.setState({tasks:originalTasks});
        console.log(error);
    }
   }
}
export default Tasks;