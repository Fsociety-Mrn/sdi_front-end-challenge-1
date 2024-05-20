import { 
    AppBar, 
    Box, 
    Container,
    IconButton,
    Toolbar, 
} from '@mui/material'

import React from 'react'


import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Logo from "../assets/images/Toyota.jpg"

const Appbar = ({ children }) => {


  return (
    <div>      
    
        <AppBar position="fixed" sx={{bgcolor: '#f5f5f5'}}>
            <Toolbar >

            <AppBar position="fixed" sx={{bgcolor: '#ffffff'}}>
            <Toolbar >

                <IconButton size='large' color='primary'>
                    <img src={Logo} alt="Toyota Logo" width="80" height="60"/>
                </IconButton>
             
      

                <Box sx={{ flexGrow: 1 }} /> 

                <Box sx={{ flexGrow: 0 }}> 
     
                    <IconButton size='large' color='primary'>
                        <FacebookIcon fontSize='large'/>
                    </IconButton>

                    <IconButton size='large'  color='primary' >
                        <XIcon fontSize='large'/>
                    </IconButton>

                    <IconButton size='large'  color='primary'>
                        <YouTubeIcon fontSize='large'/>
                    </IconButton>

                    <IconButton size='large' color='primary' >
                        <LinkedInIcon fontSize='large'/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
      

                <Box sx={{ flexGrow: 1 }} /> 

                <Box sx={{ flexGrow: 0 }}> 
     
                    <IconButton size='large' color='primary'>
                        <FacebookIcon fontSize='large'/>
                    </IconButton>

                    <IconButton size='large'  color='primary' >
                        <XIcon fontSize='large'/>
                    </IconButton>

                    <IconButton size='large'  color='primary'>
                        <YouTubeIcon fontSize='large'/>
                    </IconButton>

                    <IconButton size='large' color='primary' >
                        <LinkedInIcon fontSize='large'/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Toolbar id="back-to-top-anchor" />
        <Container >
            <Box sx={{ my: 2 }}>
                { children }
            </Box>
        </Container>

  </div>
  )
}

export default Appbar