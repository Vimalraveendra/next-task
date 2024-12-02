import Image from "next/image"


const NavigationForm = () => {
  return (
    <div className=" w-full max-w-7xl  mr-5 ml-4 mt-6 h-60 bg-white rounded-lg border-solid border border-[#D0D5DD]">
        <div className="flex flex-col pt-5 pl-6 relative">
             <label htmlFor="name" className="text-sm font-medium text-[#344054]">Nazwa</label>
                <input
                type="text"
                placeholder="np.promocje"
                className="rounded-md border-solid border border-[#D0D5DD] text-md font-normal  py-2 px-3 gap-8 h-10 max-w-[1064px] mb-2"
                />
                <label htmlFor="link" className="text-sm font-medium text-[#344054]">Link</label>
                <input
                type="text"
                placeholder="Wklej lub wyszukaj"
                className="rounded-md border-solid border border-[#D0D5DD] text-md font-normal  py-2 px-3 gap-8 h-10 max-w-[1064px] "
                /> 
                <div className="absolute top-5 right-6 w-10 h-10 py-2.5 px-2.5">
                <Image
                    src="/trash.svg"
                    alt="plus"
                    width={20}
                    height={20}
                    />
                </div>
         </div>
         <div className="flex pt-5 pl-6 pb-5  ">
             <button className="rounded-md border-solid border border-[#D0D5DD] py-2.5 px-3.5 gap-4 m-w-[75px] mr-2 text-sm font-semibold text-[#344054] ">Anuluj</button>
             <button className="rounded-md border-solid border border-[#D0D5DD] py-2.5 px-3.5 gap-4 m-w-[75px] text-sm font-semibold text-[#6941C6]">Dodaj</button>
         </div>
    </div>
  )
}

export default NavigationForm