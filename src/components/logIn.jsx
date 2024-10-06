import { useEffect, useState } from 'react'
export default function logIn(props){
    const [name1, setName1] = useState("")
    const[pass,setPass]=useState("")
    function signUp(){
   
        function hasUpperCase(str) {
            return str !== str.toLowerCase();
        }
        if(name1.length>3&&hasUpperCase(name1)&&pass.length>4){
          fetch('https://66ea7db455ad32cda47915a6.mockapi.io/exam/users', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify({
                name:name1,
                
                password:pass
            })
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(user => {
            props.uId(user.id)
            props.log(true)
          
            // do something with the new task
          }).catch(error => {
            // handle error
          })}else{
            alert("user name must be more than 3 letters and includes 1 capital letter and password must bemore than 4 number and enter correct email");
          }
        
        }
 
    return (
        <section className='p-5 w-3/5 mx-auto pt-20'>
    <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" onChange={(e)=>setName1(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow"  onChange={(e)=>setPass(e.target.value)}/>
</label>
<button className='button' onClick={signUp}>sign Up</button>
</section>
  )

}

