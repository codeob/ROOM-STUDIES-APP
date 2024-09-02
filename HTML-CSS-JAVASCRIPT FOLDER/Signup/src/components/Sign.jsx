import { IoMdPerson } from "react-icons/io";

function Sign() {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-screen " style={{backgroundImage:'url("https://images.pexels.com/photos/11276232/pexels-photo-11276232.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
      <div>
        
        <div className=" flex justify-center mx-32   backdrop-blur-md w-[390px] h-[92vh] rounded-xl">
            <div className="flex-col">
            <h1 className="text-4xl font-bold text-white mt-3 text-center">Sign Up</h1>
            <p className="text-white text-center">Please fill in the form</p>
             <dev>
                <form >
                   <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                     <input type="text" placeholder="First Name" required className="bg-transparent outline-none  text-white" />
                     <IoMdPerson className="mr-2 text-2xl" />
                   </div>
                   <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                     <input type="text" placeholder="Surname" required className="bg-transparent outline-none  text-white" />
                     <IoMdPerson className="mr-2 text-2xl" />
                   </div>
                   <div className=" mt-7 flex justify-between items-center ">
                     <input type="date"  required className="bg-transparent outline-none  text-white" />
                   </div>
                   <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                     <input type="Email" placeholder="Email here" required className="bg-transparent outline-none  text-white" />
                   </div>
                   <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                     <input type="Password" placeholder="Password" required className="bg-transparent outline-none  text-white" />
                   </div>
                   <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                     <input type="Password" placeholder="Comfirm Password" required className="bg-transparent outline-none  text-white" />
                   </div>
                   <div className=" mt-7 bg-blue-700 h-[7vh]  rounded-md">
                     <input type="Submit" value='SignUP' required className="outline-none mx-24 font-bold mt-1 text-white  text-2xl " />
                   </div>
                </form>
             </dev>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Sign
