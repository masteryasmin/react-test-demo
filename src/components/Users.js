import React, { useEffect, useState} from 'react'
import UserDetails from './UserDetails'

function Users() {
  let value = []
  let [users, setUsers] = useState('')
  let [ID, setID] = useState(0)
  let [toggle, setToggle] = useState(false)

  useEffect(() => {
    getData();
    async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    value = await response.json();
    setUsers(value)
  }
  },[]);

    const showUserDetails = (id) => {
      setID(id)
      console.log("in onclick", id)
      setToggle(true)
    }

    const showUser = () => {
      setToggle(false)
    }

  return (
    <div className="container">
    <div className="App">
      {toggle?<UserDetails userId={ID} handleShowUser={showUser} />: <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Posts</th>
              <th scope="col">User Details</th>
            </tr>
          </thead>
          {users && (
          <tbody>
          {users.map(user => {
            return(
              <tr key={user.id}>
              <td >{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>User Posts</td>
              <td><button type="button" onClick={()=>showUserDetails(user.id)} class="btn btn-primary">Get Details</button></td>
              
             </tr> )
          })}
          </tbody>
          )}
        </table>}
        
        </div>
    </div>
  );
}

export default Users;
