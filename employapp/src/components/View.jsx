import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var[emp,setemp]=useState([])
  var navigate = useNavigate()
  //useEffect(()=>{},[])
  useEffect(()=>{
  axios.get("http://localhost:3002/view")
  .then((res)=>{
    console.log(res)
    setemp(res.data)
  })
  .catch((err)=>
    console.log(err))
},[])
  const delvalue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3002/remove/"+id)
    .then((res)=>{
      alert(res.data.message)
      window.location.reload()
    })
    .catch((err)=>console.log(err))
  }
  const updatevalue = (val)=>{
    console.log("Up clicked")
    navigate("/a",{state:{val}})
  }
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Salary</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {emp.map((val,i)=>{
                return(
            <TableRow>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Dept}</TableCell>
                    <TableCell>{val.Sal}</TableCell>
                    <TableCell>
                    <Button variant='contained' color='success' onClick={()=>{delvalue(val._id)}}>Delete</Button>&nbsp;&nbsp;
                    <Button variant='contained' color='success' onClick={()=>{updatevalue(val)}}>Update</Button>
                    </TableCell>
                </TableRow>
                )
              })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
