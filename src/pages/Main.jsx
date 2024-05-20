import { Avatar, Grid, Typography } from '@mui/material'
import Logo from "../assets/images/Logo Toyota.png"
import React from 'react'


const Main = (props) => {

  return (
    <div >
        <Grid container>
            <Grid item xs={12}>

                <Avatar sx={{
                    width: "100px",
                    height: "60px"
                }}
    
                >        
                    <img src={Logo} alt="Toyota Logo" width="100%" height="100%"/>
                </Avatar>
                
                    <Typography variant='caption' color='#EB0A1E'>
                        <strong> {props.Author.name} </strong> | {props.Author.role}
                    </Typography>
              
                <Typography variant='h4'>
                    {props.data.title}
                </Typography>

                <Typography variant='caption'>
                    May 20 2024 | 9:30 am
                </Typography>
  
            </Grid>

            <Grid item xs={12}>

                <Typography variant='caption'>
                    {props.Author.place}
                </Typography>
            
            </Grid>

            <Grid item xs={12}>
                <img src={props.data.image_url} alt="Toyota Logo" width="100%" height="100%"/>
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body1'>
                    {props.data.body}
                </Typography>
            </Grid>


        </Grid>
    </div>
  )
}

export default Main