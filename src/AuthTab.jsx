import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AuthTab() {
    var navigate = useNavigate();
    function logout(){
        window.localStorage.removeItem("token");
        navigate("/")
    }
  return (
    <div>
        <ul className='d-flex list-unstyled gap-4'>
            {
                window.localStorage.getItem("token") && 
                (
                 <>
                 <li>
                   <Link to="/upload" className='text-decoration-none text-dark' style={{marginTop:"10px"}}>Upload Profile</Link>
                 </li>
                   <li>
                    <button className='btn btn-primary' onClick={()=>{logout()}}>Logout</button>
                   </li> 
                 </>
                )
            }
            {
             !window.localStorage.getItem("token") && 
               (
                 <>
                    <li>
                        <Link to="/login" className='text-decoration-none text-dark'>Login</Link>
                    </li>
                    <li>
                        <Link to="/signup" className='text-decoration-none text-dark'>SignUp</Link>
                    </li>
                 </>
                )
            }
        </ul>
    </div>
  )
}

export default AuthTab;