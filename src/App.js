
import './App.css';
import {  useEffect, useState } from 'react';
const { faker } = require('@faker-js/faker');
// import Modal from './components/modal';

 
  const App = () => {
    const [cat, setCat] = useState([
      ]);
    // let name = faker.name.firstName() 
    const fetchImageData = async () => {
      
      try {
  
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  
      
        if(!response.ok){
          throw new Error(response.statusText)
        }
     
        const data = await response.json();
        return data 
        
      } catch (err) {
        console.log(err)
      }
    };  
    useEffect(() => {
      const fetchData = async () =>{ 
        
          let catList = await fetchImageData();
             catList.map((cat)=>{ 
                
                cat.name = faker.name.firstName();
                cat.price = faker.commerce.price();
               
        })        
        setCat(catList);
        console.log(cat)
    }
    fetchData();
    }, []) ;


    return (
      <div className="App">
        <h1>Cats</h1>  
        {cat.map((cat, index)=>(
            <div key={index}>
              <h3>Name: {cat.name}</h3>              
              <img src={cat.url} alt="cat"/> 
              <p>£{cat.price}</p>
              id = {cat.id}
            <button>Add to basket</button>             
          </div>
        ))}      
             
      </div>

    );
   
  }
  

export default App;
