
import './App.css';
import {  useEffect, useState } from 'react';
const { faker } = require('@faker-js/faker');
// import Modal from './components/modal';

 
  const App = () => {
    const [zooAnimal, setZooAnimal] = useState([]);
    
    
    const fetchData = async () => {
      
      try {
  
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  
      
        if(!response.ok){
          throw new Error(response.statusText)
        }
     
        const data = await response.json();
  
        console.log(data)
        setZooAnimal(data)
      } catch (err) {
        
        console.log(err)
      }
    }
    
   
    useEffect(() => {
      
      fetchData()
  
    }, [])
  
    return (
      <div className="App">
        <h1>Cats</h1>
        {zooAnimal.map((data, index) => {
          // map through API data stored in the state and display it to the user
          return (
            <div key={index}>
              <h3>Name: {faker.name.findName()}</h3>
              <img src={data.url} alt="film"/>              
            </div>
          )
        })}
      </div>
    );
  }
  

export default App;
