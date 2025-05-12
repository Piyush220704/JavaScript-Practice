import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import BlackButton from "../components/BlackButton";
import BottomWarning from "../components/BottomWarning";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-600 flex justify-center h-screen">
        <div className=" flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label="Sign Up" />
            <SubHeading text="Create your account" />
            <InputBox label="first name" palceholder="Enter your first name" onChange={e=>{setFirstName(e.target.value)}}/>
            <InputBox label="last name" palceholder="Enter your last name" onChange={e=>{setLastName(e.target.value)}}/>
            <InputBox label="username" palceholder="Enter your username" onChange={e=>{setUsername(e.target.value)}}/>
            <InputBox label="password" palceholder="Enter your password" onChange={e=>{setPassword(e.target.value)}}/>
            <BlackButton label="Sign Up" onclick={async ()=>{
              const response = await axios.post("http://localhost:5000/api/v1/user/signup", {
                firstName,
                lastName,
                username,
                password
              },{
                withCredentials: true
              })
              
              navigate('/dashboard')
            }} />
            <BottomWarning label="Already have an account?" buttonText="Sign In" to="/signin" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
