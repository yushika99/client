import axios from 'axios';
const apiUrl = "http://localhost:8080/api/tasks";

export function getTask(){
    return axios.get(apiUrl);
}

export function addTask(task){
return axios.post(apiUrl,task)

}

export function updateTask(id,task){
    return axios.put(apiUrl+"/"+id,task)
}

export function deleteTask(id){
    return axios.put(apiUrl+"/"+id)
}