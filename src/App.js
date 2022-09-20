

import './App.css';




function App() {
  return (
    <div className="App">
      <Person name='Sakib khan' naiyka='Aopu bissah'></Person>
      <Person name='BappaRazz' naiyka='Shaka'></Person>
      <Person name='Ruble' naiyka='Mousumi'></Person>


    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name} </h1>
      <h3>{props.naiyka} </h3>
    </div>
  )
}

export default App;
