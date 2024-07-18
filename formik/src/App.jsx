import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {useFormik} from 'formik';

function App() {
  const formik= useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    onSubmit:(values)=>{
      console.log("form submit",values);
     // axios.post('.....',{values})
    },
    validate:(values)=>{
      let errors={};
      if(!values.name){
          errors.name="name required";
      }
      if(!values.email){
        errors.name="email required";
    }
    if(!values.password){
      errors.name="password required";
  }
  return errors;
    }
  })
  //console.log("form values",formik.values);
  return (
    <>
      <div className="App">
        <form  onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" id="name" values={formik.values.name} onChange={formik.handleChange}></input>
          {formik.errors.name?<div>{formik.errors.name}</div>:null}

          <label>Email</label>
          <input type="text" name="email" id="email" values={formik.values.email} onChange={formik.handleChange}></input>
          {formik.errors.email?<div>{formik.errors.email}</div>:null}

          <label>Password</label>
          <input type="password" name="password" id="password" values={formik.values.password} onChange={formik.handleChange}></input>
          {formik.errors.password?<div>{formik.errors.password}</div>:null}

          <button type="submit">Register</button>
        </form>
       </div>
    </>
  )
}

export default App
