import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/get/users");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/user/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      loadUsers();
      console.log(`Deleted user with id: ${id}`);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border-black shadow">
          <thead>
            <tr className='border'>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row" className='py-3'>{index + 1}</th>
                  <td className='py-3 fs-6 fw-bold lh-lg'>{user.username}</td>
                  <td className='py-3 fs-6 fw-bold lh-lg'>{user.name}</td>
                  <td className='py-3 fs-6 fw-bold lh-lg'>{user.email}</td>
                  <td className='py-4'>
                    <Link to={`/viewuser/${user.id}`}><button className='btn btn-primary mx-2'>View</button></Link>
                    <Link to={`/edituser/${user.id}`}>
                      <button className='btn btn-outline-primary mx-2'>Edit</button>
                    </Link>
                    <button
                      className='btn btn-danger mx-2'
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
