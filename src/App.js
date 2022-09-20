

import { useEffect, useState } from 'react';
import './App.css';

const nayoks = [
  { name: ' Dr. Mahafuz', job: 'singer' },
  { name: ' sakib khan', job: 'nayok' },
  { name: ' Ruble', job: 'hero' },
  { name: ' josim', job: 'moskai na' }
]


function App() {
  return (
    <div className="App">
      <Users></Users>

      {/* <Counter></Counter> */}
      {/* 

      {
        nayoks.map(nayok => <Person names={nayok.name} job={nayok.job} ></Person>)
      } */}

      {/* <Person name='Sakib khan' naiyka='Aopu bissah'></Person>
      <Person name='BappaRazz' naiyka='Shaka'></Person>
      <Person name='Ruble' naiyka='Mousumi'></Person> */}


    </div>
  );
}
// users data load api 
function Users() {
  const [users, setUsers] = useState([])
  console.log(users);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>Total users :{users.length} </h2>
      {
        users.map(user => <User name={user.name} email={user.email} ></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div>
      <h2>Name :{props.name} </h2>
      <p>Email :{props.email} </p>
    </div>
  )
}
// counter component 
function Counter() {
  const [count, setCount] = useState(50)
  // incriess button 
  const incriess = () => {
    setCount(count + 1);
  }
  // decriess button 
  const decriess = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count :{count} </h1>
      <button onClick={incriess}>Incress</button>
      <button onClick={decriess}>Decrice</button>
    </div>
  )
}
// person component 
function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.names} </h1>
      <h3>{props.job} </h3>
    </div>
  )
}

export default App;
