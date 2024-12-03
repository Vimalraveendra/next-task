"use client"

import { ITask } from "@/app/page"
import Image from "next/image"

export interface IFormProps {
  newTask:ITask,
  handleChangeTask :(e:React.SyntheticEvent<HTMLInputElement>)=>void,
  handleAddTask:()=>void;
  handleCancelTask:()=>void;
 }


const NavigationForm:React.FC<IFormProps> =
 ({newTask,handleChangeTask,handleAddTask,handleCancelTask}) => {
    
  return (
         <>
            <div className="flex flex-col pt-5 pl-6  max-w-[1064px] xl:max-w-[976px] lg:max-w-[80vw] md:max-w-[50vw] ">
                <label htmlFor="name" className="text-sm font-medium text-[#344054]">Nazwa</label>
                    <input
                    type="text"
                    placeholder="np.promocje"
                    name="name"
                    className="rounded-lg border-solid border border-[#D0D5DD] text-md font-normal  py-2 px-3.5 gap-2 h-10 max-w-[1064px] mb-2 text-[#667085] placeholder-[#667085]"
                    value={newTask&&newTask.name}
                    onChange={handleChangeTask}
                    />
                    <label htmlFor="link" className="text-sm font-medium  text-[#344054]">Link</label>
                     <div className=" flex items-center rounded-lg border-solid border border-[#D0D5DD] text-md font-normal  py-2 px-3.5 gap-2 h-10 max-w-[1064px] focus:outline-blue-500">
                             <Image
                              src="/search.svg"
                              alt="plus"
                              width={20}
                              height={20}
                              className=" text-[#667085] "
                              />
                          <input
                          type="text"
                          placeholder="Wklej lub wyszukaj"
                          name="url"
                          className="  text-[#667085] placeholder-[#667085] w-full outline-none"
                          value={newTask &&newTask.url}
                          onChange={handleChangeTask}
                          /> 
                             
                     </div>
                    
                    <div className="absolute top-3 right-6 w-10 h-10 py-2.5 px-2.5">
                    <Image
                        src="/trash.svg"
                        alt="plus"
                        width={20}
                        height={20}
                        className="text-[#475467]"
                        />
                    </div>
            </div>
            <div className="flex pt-5 pl-6 pb-5  ">
                <button className="rounded-md border-solid border border-[#D0D5DD] py-2.5 px-3.5 gap-4 m-w-[75px] mr-2 text-sm font-semibold text-[#344054]"onClick={handleCancelTask}  >Anuluj</button>
                <button className="rounded-md border-solid border border-[#D0D5DD] py-2.5 px-3.5 gap-4 m-w-[75px] text-sm font-semibold text-[#6941C6]" onClick={handleAddTask}>Dodaj</button>
            </div>
         </>
            
    
  )
}

export default NavigationForm