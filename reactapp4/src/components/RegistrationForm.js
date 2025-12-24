import React, { useState } from 'react'

function RegistrationForm() {
   const [inputs, setinputs] = useState({})
   const handleChange = (e)=> {
    const name = e.target.name;
     const value = e.target.value;
     setinputs(values => ({...values, [name]:value

     }))

   }
  return (
    <>
    <h1>Registraion Form</h1>
    <form>
        <input type='text' name='fullname' onChange={handleChange} placeholder='Enter name'></input><br/>
          <input type='number' name='age' onChange={handleChange} placeholder='Enter age'></input><br/>
          <select name='district' onChange={handleChange}>
            <option>Select one</option>
            <option>Dhaka</option>
            <option>Khulna</option>

          </select>
    </form>
    {console.log(inputs)}
      
    </>
  )
}

export default RegistrationForm
