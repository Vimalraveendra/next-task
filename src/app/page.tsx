"use client"
import { SyntheticEvent, useState } from "react";


import Menu from "@/components/Menu";
import NavigationForm from "@/components/NavigationForm";
import NavigationList from "@/components/NavigationList";


export interface ITask {
  id: number;
  name: string;
  url: string;
  subList?:ITask[]
}

const defaultProps:ITask={
  id:0,
  name:"",
  url:"",
  subList:[]
}
const  Home=()=> {
     const [tasks,setTasks] = useState<ITask[]>([{
      id:1,
      name:"Hello",
      url:"Hai",
      subList:[
        {
          id:100,
          name:"Study Java",
          url:"Where",
          subList:[
                {
                          id:200,
                  name:"Study Angular",
                  url:"Warsaw",
                  subList:[
                    {
                      id:1000,
                      name:"Oops Concept",
                      url:"Italy",
                    }
                  ]
                }
          ]
        }
      ],
    },
      {
        id:2,
        name:"Alexander",
        url:"Come on",
        subList:[
          {
            id:101,
            name:"Study React",
            url:"React",
          }
        ]
      }
    ]);
     const[newTask,setNewTask] = useState<ITask>(defaultProps)
     const[editTaskId,setEditTaskId]=useState<number|null>(100)
     const [isEdit,setIsEdit] = useState<boolean>(true)
     const [toggleForm,setToggleForm]=useState<boolean>(false)
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

     const handleCancelTask=():void=>{
      setIsEdit(false)
      toggleForm && setToggleForm(false)
      setEditTaskId(null)
      setNewTask(defaultProps)
     }

     const handleEditTask=(task:ITask):void=>{
      console.log("tasl",task)
      setToggleForm(false);
      setIsEdit(true)
      setEditTaskId(task.id)
      setNewTask(task)
    }
     const handleToggleForm=()=>{
      setToggleForm(!toggleForm);
      handleCancelTask();
     }
    
  return (
      <main className="flex  flex-col items-center border-dashed border-2 border-indigo-500 h-dvh overflow-scroll">
          <Menu/>
          <div className=" w-full max-w-7xl  mr-5 ml-4 mb-8 h-60 gap-5 pb-5 bg-white rounded-lg border-solid border border-[#D0D5DD] relative ">
          <NavigationForm  newTask={newTask} handleChangeTask={handleChangeTask} handleAddTask={handleAddTask} handleCancelTask={handleCancelTask}/>
          </div>
          {
             tasks.length>0 && 
             <div className=" w-full max-w-7xl  mr-5 ml-4 mb-8 rounded-lg border-solid border border-[#D0D5DD] overflow-clip ">
             <ul >
                {
                   tasks.length>0 && tasks.map((task)=>(
                     <NavigationList
                      key={task.id}  
                      task={task} 
                      isEdit={isEdit}
                      editTaskId={editTaskId}
                      handleEditTask={handleEditTask}
                      handleChangeTask={handleAddTask}
                      handleAddTask={handleAddTask}
                      handleCancelTask={handleCancelTask}
                      />
                   ))
                }
             </ul>
             {
                        toggleForm &&
                        <div className=" my-5 mx-6  bg-white rounded-lg border-solid border border-[#D0D5DD]"> 
                        <NavigationForm  
                                newTask={newTask} 
                                handleChangeTask={handleChangeTask}
                                 handleAddTask={handleAddTask}
                                 handleCancelTask={handleCancelTask}
                                />
                        </div>
                            
                        }
             <div className=" gap-2 py-5 px-6 bg-transparent">
                    <button className="border-solid border border-[#D0D5DD]   text-sm font-semibold text-[#344054 rounded-lg py-2.5 px-3.5 " onClick={handleToggleForm} > Dodaj pozycję menu</button>
            </div>
           </div>
          }
        
         
      </main>

  );
}

export default Home 
