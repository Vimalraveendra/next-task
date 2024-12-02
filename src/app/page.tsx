"use client"
import { SyntheticEvent, useState } from "react";


import Menu from "@/components/Menu";
import NavigationForm from "@/components/NavigationForm";
import NavigationList from "@/components/NavigationList";

export interface Task {
  id: number;
  name: string;
  url: string;
}

const defaultProps:Task={
  id:0,
  name:"",
  url:""
}
const  Home=()=> {
     const [tasks,setTasks] = useState<Task[]>([]);
     const[newTask,setNewTask] = useState<Task>(defaultProps)
    //  const[editTaskId,setEditTaskId]=useState<number|null>(null)
     // const [dragItem,setDragItem]=useState<Task|null>(null)
    

     const handleChangeTask=(e:SyntheticEvent<HTMLInputElement>)=>{
       const {name,value}=e.currentTarget;
       if (value.trim() !== " "){
         setNewTask({...newTask,[name]:value})
     }
     }

     const handleAddTask=()=>{
         if(newTask.name.trim()!=="" && newTask.url.trim()!==""){
            setTasks([...tasks,{...newTask,id: Date.now()}])
         }
         setNewTask(defaultProps)
     }
     console.log("task",tasks)
  return (
      <main className="flex  flex-col items-center border-dashed border-2 border-indigo-500 h-dvh overflow-scroll">
          <Menu/>
          <NavigationForm  newTask={newTask} handleChangeTask={handleChangeTask} handleAddTask={handleAddTask}/>
          {
             tasks.length>0 && 
             <div className=" w-full max-w-7xl  mr-5 ml-4 mb-8 rounded-lg border-solid border border-[#D0D5DD] overflow-clip ">
             <ul >
                {
                   tasks.length>0 && tasks.map((task)=>(
                     <NavigationList key={task.id} task={task}/>
                   ))
                }
          
             </ul>
           </div>
          }
        
         
      </main>

  );
}

export default Home 
