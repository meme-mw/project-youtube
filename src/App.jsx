import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LogIn from './components/logIn'
import './App.css'

function App() {
  const [chars, setChars] = useState([])
  const[id,setId]=useState()
  const[logIn,setLogIn]=useState(false)
  const[uId,setuId]=useState("")
  const[uName,setuName]=useState("")
  useEffect(() => {
   
     fetch("https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=20&part=snippet&regionCode=SA&chart=mostPopular&key=AIzaSyDTLdpZSTmWHueg2bOnp8w1nzlhJbHDxhM")
    .then(response => response.json() )
    // 4. Setting *dogImage* to the image url that we received from the response above
.then(data =>{ setChars(data.items), setId(data.items[0].id) })
},[])
useEffect(() => {
fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users/${uId}`, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(user => {
 
  setuName(user.name);
   

  // Do something with the list of tasks
}).catch(error => {
  // handle error
})},[])
  return (
    <>
     <nav style={{width:"100%"}} >
      
     <div className="navbar bg-base-100 flex justify-between">
     <div >
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div >
    <a >
      <img src="https://i.ibb.co/6JFJxJR/logo.png" alt="" srcset="" width="110"/>
    </a>
  </div>
  </div>
  <label className="input input-bordered flex items-center " >
  <input type="text"  placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  
</label>
 <p>Welcome {uName}</p>
</div>
     </nav>
     {!logIn?<LogIn log={setLogIn} uId={setuId}/>:
     <section className="flex flex-wrap   justify-around">
    
      {chars.length!=0?<iframe width="500px" style={{maxWidth:"100%"}} height="330" src={`//www.youtube.com/embed/${id}?autoplay=0`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>:""}

    
    <section className="flex   flex-col justify-around">
     
    {chars.map(el=>{
      return(
    // <iframe width="480" height="270" src={`//www.youtube.com/embed/${el.id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div className="card card-side bg-base-100   w-[300px] p-1" onClick={(el)=>el.id} style={{borderRadius:"0"}}>
  <figure>
    <img
      src={el.snippet.thumbnails.default.url} className='w-[140px] '
      alt="Album" />
  </figure>
  <div className="card-body p-3 w-2/4">
    <h2 className="card-title text-[.9rem] p-0 ">{el.snippet.title}</h2>
  
   
  </div>
</div>
)})}
</section>
</section>
}
    </>

  )
}

export default App
