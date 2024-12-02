"use client"

import Image from "next/image";
import NavigationForm from "./NavigationForm";
import { Task } from "@/app/page";


const NavigationList = ({task}:{task:Task}) => {
 
  return (
    
                    <li
                        className="flex items-center  justify-between py-4 px-6 border-solid border-b border-[#EAECF0] gap-1  bg-white  flex-wrap  cursor-move"
                        draggable="true"
                    >
                               <div className="flex items-center ">
                                    <div className=" w-10 h-10 py-2.5 px-2.5 ">
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
                                        <button className="border-solid border-r border-[#D0D5DD] py-2 px-4 text-sm font-semibold text-[#344054]">Usuń</button>
                                        <button className=" border-solid border-r border-[#D0D5DD] py-2 px-4 text-sm font-semibold text-[#344054 ">Edytuj</button>
                                        <button className="  py-2 px-4 text-sm font-semibold text-[#344054 ">Dodaj pozycję menu</button>    
                                </div>
                        
                   </li>
       
            // {/* <div className="py-5 px-6 gap-2 bg-[#F9FAFB] border-solid border border-[#EAECF0]">
            //    <NavigationForm  newTask={newTask} handleChangeTask={handleChangeTask}/>
            // </div> */}

            // <div className=" gap-2 py-5 px-6 bg-transparent">
            //         <button className="border-solid border border-[#D0D5DD]   text-sm font-semibold text-[#344054 rounded-lg py-2.5 px-3.5 "> Dodaj pozycję menu</button>
            // </div>

  )
}



export default NavigationList