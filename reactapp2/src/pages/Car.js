import React from 'react'

function Car(props) {
   const {brand, year, ...rest} = props;
   const welcome = () => {
    alert("Hello from Arrow Functon")
   }

   const cars = ["BMW", "Toyota", "Odi", "Ferrari"];

  return (
        <>
      <h1>About Car</h1>

      <p>Brand: {brand}</p>
      <p>Year: {year}</p>
      <p>Color: {rest.color}</p>

      <button onClick={welcome()}>Click here</button>
      <ul>
        {cars.map((car)=><li>{car}</li>)}
      </ul>
      
     
     
      </>
   
  )
}

export default Car
