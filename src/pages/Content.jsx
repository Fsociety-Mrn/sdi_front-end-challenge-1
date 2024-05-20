import React from 'react'
import MediaCard from '../components/Card'
import { Grid } from '@mui/material'

const Content = ({ data, view, read }) => {
  return (
    <div >

      <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      >

        {
          data.filter(data=>data.id !== view.id).map((data, key)=>(
            <Grid key={key} item xs={12} md={4}>
              <MediaCard key={key} data={data} read={read}/>
            </Grid>
          ))
        }

      </Grid>

    </div>
  )
}

export default Content