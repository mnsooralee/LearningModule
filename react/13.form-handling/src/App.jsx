import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError, //make custom errors
    formState: {errors, isSubmitting}
  } = useForm();

  const delay = (d) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d*1000);
    } )
  }

  const onSubmit = async (data) => {
    await delay(2); //simulating newtwork delay
    console.log(data)
    if(data.username ==="david") {
      setError("thisform", {message: "Sorry this user(david) is blocked"})
    }
    if(data.username === "adam") {
      setError("adam" , {message:"sorry this user(adam) is blocked"})
    }
  }
  
  return (
    <>
    {isSubmitting && <div>Loading...</div>} {/* if isSubmitting is true run this task "loading..." */}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("username", {required:true, minLength:3, maxLength:8})} type="text" placeholder = "username"/> <br/>
        {errors.username && <div class="red">There is some error in username</div>} */}

        <select {...register("city", {required: true})}>
          <option value="">select city...</option>
          <option value="Karachi">Karachi</option>
          <option value="Islamabad">Islamabad</option>
        </select><br/>
        <input {...register("Full name", {required: true})} type="text" placeholder='full name'></input><br/>
        <input {...register("username",{required:true, minLength:{value: 3, message:"minimum length is 3"}, maxLength:{value:8, message: "maximum length is 8"}})} type="text" placeholder = "username"/> <br/>
        {errors.username && <div className="red">{errors.username.message}</div>}
        <input {...register("password", {required:true, minLength:{value:6, message:"min length is 6"}})} type="password" placeholder = "password"/> <br/>{/**remove name="password" id="" because {...register("password")} does this job*/}
        {errors.password && <div className="red">{errors.password.message}</div>}
        <input disabled={isSubmitting} type="submit" value="submit" />        
        {errors.thisform && <div className="red">{errors.thisform.message}</div>}
        {errors.adam && <div className='red'>{errors.adam.message}</div>}
      </form>
    </div>
    </>
  )
}

export default App
