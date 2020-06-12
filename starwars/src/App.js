import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCaracters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    console.log ('kill after all')
  })
  useEffect(() =>{
    axios.get('https://swapi.py4e.com/api/people/')
    .then(res =>{
      setCaracters(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.log('Woohoo you see me again')
    })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">{characters.people}</h1>
      
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>   
    </div>
  );
}

export default App;
