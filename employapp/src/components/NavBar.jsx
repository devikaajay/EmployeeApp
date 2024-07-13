import { LinkOffTwoTone } from '@mui/icons-material'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Box>
         <AppBar color='success'>
             <Toolbar>
                <Typography variant='h6'>Employee App</Typography>&nbsp;&nbsp;
                <Button variant="contained" color='success'>
                    <Link to={"/a"}
                    style = {{textdecoration: "none", color: "white"}}>
                Add
                </Link>
                </Button>&nbsp;&nbsp;
                <Button variant="contained" color='success'>
                <Link to={"/"}
                style = {{textdecoration: "none", color: "white"}}>
                    View
                    </Link>
                    </Button>
             </Toolbar>
        </AppBar>
      </Box>
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default NavBar
