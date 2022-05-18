
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
        <h1 className='title'><span>Cats4Lyfe</span></h1>
        <div className="description-container">
          <h3 className="description-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate repellat natus, quam maiores molestias, esse amet hic soluta fugiat harum autem corrupti itaque error corporis facilis dolor beatae commodi sunt!
          </h3>
        </div>
        <div className="container">
        <div className="cat-cards">
        {zooAnimal.map((data, index) => {
          // map through API data stored in the state and display it to the user
          return (
            <div className='cat-card' key={index}>
              <h3>Name: {faker.name.firstName()}</h3>
              <img src={data.url} alt="cat"/> 
              <p>£{Math.floor(Math.random()*1000)}</p>
              <button>Add to basket</button>             
            </div>
          )
        })}
        </div>
        <div className="basket-container">
          <div className="basket-header">
          <h3 className='basket-heading'>Basket</h3>
          <h4 className='basket-removeAll'>Remove All</h4>
          </div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        <div className="basket-footer">
          <button className="basket-buyBtn">Buy da kitties</button>
        </div>
        </div>
      </div>
      </div>
    );
  }
  

export default App;
