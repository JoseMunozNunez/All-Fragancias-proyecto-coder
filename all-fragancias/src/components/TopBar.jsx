import React from 'react'
import {AppBar, Typography} from '@mui/material'


function TopBar() {
  return (
    <div>

        <AppBar sx={{background:'#212121',}}>                 
          <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 300,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              padding : 1
            }}
          >
            Bienvenido a All Fragancias
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 300,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              padding: 1
            }}
          >
            Bienvenido a All Fragancias 
          </Typography>
          
        </AppBar>      
    
    </div>
  )
}

export default TopBar