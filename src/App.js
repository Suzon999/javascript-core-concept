

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
      {
        nayoks.map(nayok => <Person names={nayok.name} job={nayok.job} ></Person>)
      }
      {/* <Person name='Sakib khan' naiyka='Aopu bissah'></Person>
      <Person name='BappaRazz' naiyka='Shaka'></Person>
      <Person name='Ruble' naiyka='Mousumi'></Person> */}


    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.names} </h1>
      <h3>{props.job} </h3>
    </div>
  )
}

export default App;
