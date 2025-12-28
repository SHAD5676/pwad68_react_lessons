import axios from "axios";
import { useForm } from "react-hook-form";


function BlogEntry1() {
    const {register, handleSubmit,watch, formState: { error}} = useForm();

     const onSubmit = (data) => {
            //console.log(data)
            blogPost(data);
        }

        
   const blogPost = (data) => {
    axios.post("http://localhost/pwad_react/reactapp/reactapp/api/blog/addblog.php", data).then(function(response){
        alert(response.data)
    })
   }
    
  return (
   
      <div className='container'>
      <h1>Blog Entry (1)</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("title")} defaultValue="" className="form-control" placeholder="Enter title"
        
       
         className='form-control' />
        <input type='submit' className='btn btn-primary'> </input>
      </form>
      {console.log(input)}
    </div>
  
  )
}

export default BlogEntry1
