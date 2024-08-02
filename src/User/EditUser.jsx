import {useEffect, useState} from 'react'
import { Link , useNavigate , useParams} from 'react-router-dom'

const EditUser = () => {
  let navigate = useNavigate()
 
  const {id} = useParams()

  const[newUser , SetNewUser] = useState({
    name:"",
    username:"",
    email:""
  })

   const {name , username , email} = newUser

   const onInputeChnage = (e) => {
    SetNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
      [e.target.username]: e.target.value,
      [e.target.email]: e.target.value
    });
  }

   useEffect(() => {
      loadUser()
   } , [])
   
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:8080/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      });
  
      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

   const loadUser = async () => {
        fetch(`http://localhost:8080/user/${id}`)
        .then(res => res.json())
        .then(data => SetNewUser(data))
   }
  
   
 
  return (
    <div className='container'>
     <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
       <h2 className='text-center m-4'>Edit User</h2>
       <form onSubmit={handleSubmit}>
       <div className='mb-3'>
        <label htmlFor='Name' className='form-label ms-1'>Name</label>
        <input type="text" className='form-control' placeholder='Enter your name' name='name' value={name} onChange={onInputeChnage}/>
       </div>
       <div className='mb-3'>
        <label htmlFor='username' className='form-label ms-1'>Username</label>
        <input type="text" className='form-control' placeholder='Enter your username' name='username' value={username} onChange={onInputeChnage}/>
       </div>
       <div className='mb-3'>
        <label htmlFor='email' className='form-label ms-1'>Email</label>
        <input type="text" className='form-control' placeholder='Enter your email' name='email' value={email} onChange={onInputeChnage}/>
       </div>
       <button type='submit' className='btn btn-outline-primary  mt-3 ms-4'>Submit</button>
       <Link to="/"><button  className='btn btn-outline-danger mt-3 ms-3'>Cancel</button></Link>
       </form>
      </div>
     </div>
    </div>
  )
}

export default EditUser
