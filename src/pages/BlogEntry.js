import axios from 'axios';
import React, { useEffect, useState } from 'react'

function BlogEntry() {
   const[input, setInputs] = useState({});

   function handleChange(e){
    let name = e.target.name;
    let value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
   }

   /* useEffect(() =>{
        
    }, {}); */
 

   function handleSubmit(e){
    e.preventDefault();
    blogPost();
   
   }

   const blogPost = () => {
    axios.post("http://localhost/pwad_react/reactapp/reactapp/api/blog/addblog.php", input).then(function(response){
        console.log(response.data)
    })
   }


  return (
    <div className='container'>
      <h1>Blog Entry</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='title' value={input.title} onChange={handleChange}
         className='form-control' placeholder='Enter title'></input>
        <textarea name='details' value={input.details} onChange={handleChange}
         className='form-control'></textarea>
        <input type='submit' className='btn btn-primary'> </input>
      </form>
      {console.log(input)}
    </div>
  )
}

export default BlogEntry
