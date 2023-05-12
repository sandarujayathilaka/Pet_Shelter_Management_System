import React, { useState } from "react";
import { Link } from 'react-router-dom';
import bgimg from "../assets/bgimg.jpg"
import axios from 'axios'
import VSideBar from "./VSideBar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AddTBooking() {
    
    

    const[userName, setUserName] = useState("");
    const[plocation, setPlocation] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[count, setCount] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");





    function addTBooking(e) {
        e.preventDefault();

        const newTBooking = {

            userName,
            plocation,
            date,
            time,
            count,
            phone,
            email

    }


        axios.post("http://localhost:8080/api/transport",newTBooking)
        .then(()=>{
            toast.success("Requested successfully", { position: toast.POSITION.TOP_RIGHT });
            
       }).catch((err)=>{
            if(err.response.status === 409)
             toast.error("Cannot insert !! Request already exists !!", { position: toast.POSITION.TOP_RIGHT });

            else
             toast.error(`Request insert unsuccessful ${err}`, { position: toast.POSITION.TOP_RIGHT });

               
       })


    }

    return (
       //Main container
        <div className="flex scroll-smooth">
            <VSideBar />

        {/*Right Side container start*/}
        <div className="bg-[#d9d9d9] flex-[85%]">

          {/*Header Part*/}
          <div className="bg-[#2E4960] h-100 w-full">
            <h1 className="text-white font-bold text-3xl leading-5 tracking-wide pt-5 pl-5 ">ADD VEHICLE</h1>

              <div className=" flex p-5">

              <Link to='/addtbooking' 
              className=" bg-[#797979] px-[15px] py-[8px] rounded-[120px] font-bold text-white text-[12px] block w-[100px] text-center mr-2"
              >+ADD</Link> 

              </div>
          </div>
  
          {/*Body Part*/}
          <div 
            style={{ backgroundImage: `url(${bgimg})` }}
            className="bg-cover bg-center h-screen w-full fixed" >

                <div className=" bg-white bg-opacity-90 w-[75%] h-[80%] absolute top-5 left-[80px] overflow-scroll"> 

                    <div className="w-[800px] h-[800px] mx-auto rounded-2xl bg-white mt-8">

                    <h1 
                    className=" text-[#ffffff] bg-[#FF9F00] rounded-t-2xl font-bold text-3xl h-20 mb-4 pt-5 text-center drop-shadow-md"
                    >Enter Details</h1>

                    <div className=" pl-5">

                        <form className="mx-auto" onSubmit={addTBooking}>
                        

                                <div className="flex mb-6">
                                    <div className=" w-[50%]  ">
                                        <label className="">User Name :</label>
                                        <input type="text" 
                                        className=" rounded-3xl py-2.5 px-5 w-[50vh] text-sm text-gray-900 bg-[#E4EBF7] border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-[#FF9F00]" 
                                        onChange={(e)=>{
                                            setUserName(e.target.value)}} required />                        
                                    </div>

                                    
                                </div>

                                <div className="flex mb-6">

                                <div className=" w-[50%]  ">
                                        <label className="">Pick-up Location :</label>
                                        <input type="text"
                                        className=" rounded-3xl py-2.5 px-5 w-[50vh] text-sm text-gray-900 bg-[#E4EBF7] border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-[#FF9F00]" 
                                        onChange={(e)=>{
                                            setPlocation(e.target.value)}} required />                        
                                    </div>

                                    
                                </div>


                                <div className="flex mb-6">

                                

                                    <div className=" w-[50%]  ">
                                        <label className="">Date :</label>
                                        <input type="date" 
                                        className=" rounded-3xl py-2.5 px-5 w-[50vh] text-sm text-gray-900 bg-[#E4EBF7] border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-[#FF9F00]" 
                                        onChange={(e)=>{
                                            setDate(e.target.value)}} required />                        
                                    </div>


                                    
                                </div>
                                <div className="flex mb-6">

                                <div className=" w-[50%]  ">
                                        <label className="">Time :</label>
                                        <input type="time" 
                                        className=" rounded-3xl py-2.5 px-5 w-[50vh] text-sm text-gray-900 bg-[#E4EBF7] border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-[#FF9F00]" 
                                        onChange={(e)=>{
                                            setTime(e.target.value)}} required />                        
                                    </div>

                                    

                                

                                    
                                </div>

                                <div className="flex mb-6">
                                    <div className="w-[50%]">
                                        <label>Number of pets:</label>
                                        <input 
                                        type="number" 
                                        className="rounded-3xl py-2.5 px-5 w-[50vh] text-sm text-gray-900 bg-[#E4EBF7] border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-[#FF9F00]" 
                                        value={count}
                                        onChange={(e) => {
                                            if (e.target.value > 0) {
                                            setCount(e.target.value)
                                            }
                                        }}
                                        required 
                                        />
                                        {count <= 0 && (
                                        <p className="text-red-500 text-sm mt-1">Number of pets must be larger than zero.</p>
                                        )}
                                    </div>
                                </div>


                                <div className="flex mb-6">
                                    <div className="w-[50%]">
                                        <label>Contact Number :</label>
                                        <input type="tel" pattern="[0-9]{10}"
                                            className="rounded-3xl py-2.5 px-5 w-[50vh] text-sm text-gray-900 bg-[#E4EBF7] border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-[#FF9F00]"
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }} required />
                                    </div>
                                </div>


                                <div className="flex mb-6">

                                <div className=" w-[50%]  ">
                                        <label className="">Email :</label>
                                        <input type="email" 
                                        className=" rounded-3xl py-2.5 px-5 w-[50vh] text-sm text-gray-900 bg-[#E4EBF7] border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-[#FF9F00]" 
                                        onChange={(e)=>{
                                            setEmail(e.target.value)}} required />                        
                                    </div>

                                    
                                </div>

                                
                                <div className="flex mt-24 h-10">

                                    <button className="text-white bg-[#FF9F00] hover:bg-[#2E4960] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-l sm:w-auto px-20 py-5.5 text-center ml-[100px]"><Link to='/pending'>Cancel</Link></button>

                                    <button type="submit" 
                                    className="text-white bg-[#FF9F00] hover:bg-[#2E4960] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-l sm:w-auto px-20 py-5.5 text-center ml-[130px]"
                                    >Submit</button>


                                </div>
                        </form>
                        </div>

                    </div>
                   
                </div>
    
          </div>

        </div> {/*Right Side container end*/}
      </div> //Main container end

    )
}