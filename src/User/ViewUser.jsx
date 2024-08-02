import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {
  const[user , setUser] = useState({
    name:"",
    username:"",
    email:""
  })

  const{id} = useParams()

  useEffect(() => {
       loaduser()
  }, [])

   const loaduser = async () => {
       fetch(`http://localhost:8080/user/${id}`)
       .then(res => res.json())
       .then(data => setUser(data))
   }
  return (
        <div className='container'>
        <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
       <h2 className='text-center m-4'>User Details</h2>
       <div className="card">
         <div className="card-header text-center">User id: {user.id}
           <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
                   <b>Name: {user.name}</b>
            </li>
            <li className='list-group-item'>
              <b>UserName: {user.username}</b>
            </li>
            <li className='list-group-item'>
             <b>Email: {user.email}</b>
            </li>
           </ul>

         </div>
       </div>
          <Link to="/">
           <button className='btn btn-primary my-2'>Back To Home</button>
          </Link>
        </div>
        </div>
        </div>
  )
}

export default ViewUser
