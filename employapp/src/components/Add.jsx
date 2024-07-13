import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var[inputs,setinputs]=useState({Name:"",Age:"",Dept:"",Sal:""})
  var navigate = useNavigate()
  var location = useLocation()
  console.log(location.state)

  const inputHandler =(e)=>{
    setinputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  }
  useEffect(()=>{
    if (location.state !== null) {
      console.log("Debug"+location.state.val.name)
      setinputs({
      ...inputs,
      Name:location.state.val.Name,
      Age:location.state.val.Age,
      Dept:location.state.val.Dept,
      Sal:location.state.val.Sal
    })
  }
  },[])
  const AddHandler=()=>{
    if(location.state!==null){
      axios.put("http://localhost:3002/update/"+location.state.val._id,inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })
  }  else{
  axios.post("http://localhost:3002/add",inputs)
  .then((res)=>{
    console.log(res)
    alert(res.data.message)
    navigate('/')
  })
  .catch((err)=>{
    console.log(err)
  })}
  // useEffect(()=>{
  //   if (location.state !== null) {
  //     console.log("Debug"+location.state.val.name)
  //     setinputs({
  //     ...inputs,
  //     Name:location.state.val.Name,
  //     Age:location.state.val.Age,
  //     Dept:location.state.val.Dept,
  //     Sal:location.state.val.Sal
  //   })
  // }
  // },[])
}
  return (
    <div>
      <TextField variant='outlined' label='Name' onChange={inputHandler} name="Name" value={inputs.Name}/>
      <br /><br />
      <TextField variant='outlined' label='Age' onChange={inputHandler} name="Age" value={inputs.Age}/>
      <br /><br />
      <TextField variant='outlined' label='Department'onChange={inputHandler} name="Dept" value={inputs.Dept}/>
      <br /><br />
      <TextField variant='outlined' label='Salary'onChange={inputHandler} name="Sal" value={inputs.Sal}/>
      <br /><br />
      <Button variant="contained" color='success' onClick={AddHandler}>Submit</Button>
    </div>
  )
}

export default Add
