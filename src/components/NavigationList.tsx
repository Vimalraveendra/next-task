"use client"

import Image from "next/image";
import { ITask } from "@/app/page";
import NavigationForm from "./NavigationForm";


export interface INavigationListProps {
    task:ITask,
    newTask:ITask,
    isEdit:boolean,
    editTaskId:number|null,
    listId:number|null,
    handleEditTask:(task:ITask)=>void;
    handleCancelTask:()=>void;
    handleChangeTask:(e:React.SyntheticEvent<HTMLInputElement>)=>void;
    handleAddTask:()=>void;
    handleToggleForm:()=>void;
    handleAddSubList:(task:ITask)=>void;
    handleUpdateTask:()=>void;
    handleDeleteTask:(id:number|null)=>void;
    handleDragStart:(task:ITask)=>void;
    handleDragEnd:()=>void;
    handleDrop:(task:ITask)=>void
   }


const NavigationList:React.FC<INavigationListProps> =
 ({task,newTask, isEdit,editTaskId,listId,handleEditTask,handleCancelTask,handleChangeTask,
  handleAddTask,handleToggleForm,handleAddSubList,handleUpdateTask,handleDeleteTask,
  handleDragStart,handleDragEnd,handleDrop,
}) => {
  return (
      <>
                    <li
                        className="flex items-center  justify-between py-4 px-6 border-solid border-b border-[#EAECF0] gap-1  bg-white  flex-wrap  cursor-move rounded-l-md"
                        draggable="true"
                        onDragStart={() => handleDragStart(task)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e)=>e.preventDefault()}
                        onDrop={() => handleDrop(task)}
                    >
                       <div className="flex items-center ">
                                    <div className=" w-10 h-10 py-2 px-2.5 ">
                                                        <Image
                                                            src="/move.svg"
                                                            alt="plus"
                                                            width={20}
                                                            height={20}
                                                            className="text-[#475467] "  
                                                            />
                                    </div>
                                    <div className=" max-w-[761px] gap-6">
                                                            <h2 className="text-sm font-semibold text-[#101828] overflow-hidden">{task && task.name}</h2>
                                                            <p className="text-sm font-normal text-[#475467]">{task && task.url}</p>
                                     </div>
                
                              </div>
                                 
                                <div className="border-solid border border-[#D0D5DD]  rounded-lg shadow-sm gap-2">
                                        <button className="border-solid border-r border-[#D0D5DD] py-2 px-4 text-sm font-semibold text-[#344054]" onClick={()=>handleDeleteTask(task.id)}>Usuń</button>
                                        <button className=" border-solid border-r border-[#D0D5DD] py-2 px-4 text-sm font-semibold text-[#344054"  onClick={()=>handleEditTask(task)}>Edytuj</button>
                                        <button className="  py-2 px-4 text-sm font-semibold text-[#344054 " onClick={()=>handleAddSubList(task)}>Dodaj pozycję menu</button>    
                                </div>
                              
                               
                   </li>
                   {
                    (( task.id=== editTaskId && isEdit)||(task.id===listId))&&
                    <div className=" my-5 mr-6 ml-[64px] bg-white rounded-lg border-solid border border-[#D0D5DD] relative">
                    <NavigationForm  
                            newTask={newTask }
                            editTaskId={editTaskId}
                            handleChangeTask={handleChangeTask}
                            handleAddTask={handleAddTask}
                            handleCancelTask={handleCancelTask} 
                            handleUpdateTask={handleUpdateTask}
                            />
                    </div>
                   }
           {
            task.subList &&<ul className=" flex  flex-col pl-[68px] rounded-lg ">
                        {task.subList?.map((item) => (
                          <NavigationList 
                          key={item.id} 
                          task={item} 
                          newTask={newTask}
                          isEdit={isEdit}
                          editTaskId={editTaskId}
                          listId={listId}
                          handleEditTask={handleEditTask} 
                          handleCancelTask={handleCancelTask}
                          handleChangeTask={handleChangeTask}
                          handleAddTask={handleAddTask}
                          handleToggleForm={handleToggleForm}
                          handleAddSubList={handleAddSubList}
                          handleUpdateTask={handleUpdateTask}
                          handleDeleteTask={handleDeleteTask}
                          handleDragStart={handleDragStart}
                          handleDragEnd={handleDragEnd}
                          handleDrop={handleDrop}
                           />
                        ))}
       </ul>
    
    }

</>       
    
  )
}



export default NavigationList