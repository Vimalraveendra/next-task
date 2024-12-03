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

export const defaultProps:ITask={
  id:0,
  name:"",
  url:"",
  subList:[]
}
const  Home=()=> {
     const [tasks,setTasks] = useState<ITask[]>([]);
     const[newTask,setNewTask] = useState<ITask>(defaultProps)
     const[editTaskId,setEditTaskId]=useState<number|null>(100)
     const [isEdit,setIsEdit] = useState<boolean>(true)
     const [toggleForm,setToggleForm]=useState<boolean>(false)
     const [listId,setListId]=useState<number|null>(null)
     // const [dragItem,setDragItem]=useState<Task|null>(null)
    

     const handleChangeTask=(e:SyntheticEvent<HTMLInputElement>)=>{
       const {name,value}=e.currentTarget;
       if (value.trim() !== " "){
         setNewTask({...newTask,[name]:value})
     }
     }

     const handleAddTask=()=>{
      if(newTask.name.trim()!=="" && newTask.url.trim()!=="" && listId){
          const recursiveFn = (tasks:ITask[], listId:number):ITask[] =>
            tasks.map((item) => {
              if (item.id === listId) {
                return { ...item,subList:[ ...item.subList as [],{...newTask,id: Date.now()}] };
              } else {
                let resultArray;
                if (item.subList) {
                  resultArray = recursiveFn(item.subList, listId);
                }
                return item.subList? { ...item ,subList:resultArray} : item;
              }
            });
          const results = recursiveFn(tasks, listId);
          setTasks(results);
      }else if(newTask.name.trim()!=="" && newTask.url.trim()!==""){
        setTasks([...tasks,{...newTask,id: Date.now()}])
      }
        setNewTask(defaultProps)
          setToggleForm(false)
          setEditTaskId(null)
          setListId(null)
     }

     const handleCancelTask=():void=>{
      setIsEdit(false)
      if(toggleForm){
        setToggleForm(false)
      } 
      setEditTaskId(null)
      setListId(null)
      setNewTask(defaultProps)
     }

     const handleEditTask=(task:ITask):void=>{
      setToggleForm(false);
      setIsEdit(true)
      setEditTaskId(task.id)
      setNewTask(task)
    }
     const handleToggleForm=()=>{
      setToggleForm(true);
      handleCancelTask();
     }
     const handleAddSubList =(task:ITask)=>{
         setToggleForm(false);
         setListId(task.id)
     }
    
  return (
      <main className="flex  flex-col items-center border-dashed border-2 border-indigo-500 h-dvh overflow-scroll">
        {
         !tasks.length && 
            <>  
                  <Menu  handleToggleForm={handleToggleForm}/>
                  {
                     toggleForm &&<div className=" w-full max-w-7xl  mr-5 ml-4 mb-8 h-60 gap-5 pb-5 bg-white rounded-lg border-solid border border-[#D0D5DD] relative ">
                     <NavigationForm  newTask={newTask}  handleChangeTask={handleChangeTask} handleAddTask={handleAddTask} handleCancelTask={handleCancelTask}/>
                     </div>
                  }
                    
                </>
          }
      
          {
             tasks.length>0 && 
             <div className=" w-full max-w-7xl  mr-5 ml-4 mb-8  rounded-lg border-solid border border-[#D0D5DD] overflow-clip ">
             <ul >
                {
                   tasks.length>0 && tasks.map((task)=>(
                     <NavigationList
                      key={task.id}  
                      newTask={newTask}
                      task={task} 
                      isEdit={isEdit}
                      editTaskId={editTaskId}
                      listId={listId}
                      handleEditTask={handleEditTask}
                      handleChangeTask={handleChangeTask}
                      handleAddTask={handleAddTask}
                      handleCancelTask={handleCancelTask}
                      handleToggleForm={handleToggleForm}
                      handleAddSubList={handleAddSubList}
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
                    <button  id="navigationFormId" name= "navigationFormId" className="border-solid border border-[#D0D5DD]   text-sm font-semibold text-[#344054 rounded-lg py-2.5 px-3.5 " onClick={handleToggleForm} > Dodaj pozycję menu</button>
            </div>
           </div>
          }
        
         
      </main>

  );
}

export default Home 
