import React, {useState} from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import BlackButton from '../components/BlackButton'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
        <div className="bg-gray-600 flex justify-center h-screen">
        <div className=" flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label="Sign In" />
            <SubHeading text="fill your credentials" />
            <InputBox label="email" palceholder="Enter your username" onChange={e=>{setUsername(e.target.value)}} />
            <InputBox label="password" palceholder="Enter your password" onChange={e=>{setPassword(e.target.value)}}/>
            <BlackButton label="Sign In" onclick={async ()=>{
              const response = await axios.post("http://localhost:5000/api/v1/user/signin", {
                username,
                password
              },{
                withCredentials: true
              })
              
              navigate('/dashboard')
            }}/>
            <BottomWarning label="don't have an account?" buttonText="Sign Up" to="/signup" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin