import Image from "next/image"


const Menu = () => {
  return (
    <header className="  max-w-7xl w-full  mr-5 ml-4 mt-6 h-40 bg-gray-50 rounded-lg gap-8 ">
         <div className="h-full pt-6  pb-5 max-w-lg mx-auto  flex flex-col items-center justify-between">
             <div className="text-center">
                    <h1 className="text-base font-semibold text-[#101828]">Menu jest puste</h1>
                    <p className="text-sm font-normal text-[#475467]">W tym menu nie ma jeszcze żadnych linków.</p>
             </div>
             <div className="w-48 h-10 flex bg-[#7F56D9] text-center rounded-md justify-center items-center">
             <Image
              src="/plus-circle.svg"
              alt="plus"
              width={20}
              height={20}
            />
             <button className="py-2.5 pr-3.5 pl-1 text-sm font-semibold text-[#FFFFFF]">Dodaj pozycję menu</button>
             </div> 
           
              
           </div>
</header>
  )
}

export default Menu