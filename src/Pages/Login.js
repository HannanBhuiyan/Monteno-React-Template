import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {

     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const navigate = useNavigate()

     const submitHandler = (e) => { 
          e.preventDefault()
          if(!name){
               toast.error('Name Field is required !!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
               });
          }
          else if(!email){
               toast.error('Email Field is required !!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
               });
          }
          else{
               setUser({name:name, email:email})
               navigate("/dashboard")
          }
          
     }

     return(
          <>
               <div className="login_section" style={{ marginTop: "100px" }}>
                    <div className="container">
                         <div className="login_area">
                              <div className="row">
                                   <div className="col-md-6 m-auto"> 
                                       <div className="card p-3">
                                             <form  onSubmit={submitHandler}>
                                                  <div className="mb-3">
                                                       <label className="form-label">Username</label>
                                                       <input type="text" onChange={(e)=> setName(e.target.value)} className="form-control" value={name} placeholder="Username" /> 
                                                  </div>
                                                  <div className="mb-3">
                                                       <label className="form-label">Email</label>
                                                       <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" value={email} placeholder="Email" /> 
                                                  </div>
                                                  <div className="mb-3"> 
                                                       <input type="submit" className="btn btn-success" value="Login" /> 
                                                  </div>
                                             </form>
                                       </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <ToastContainer />
          </>
     )

}

export default Login