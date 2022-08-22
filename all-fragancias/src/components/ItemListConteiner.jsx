import { Typography } from '@mui/material'
import React from 'react'

const ItemListConteiner = (props) => {
  return (
    <div>
        <Typography 
        variant='h3'
        noWrap
        align='center'
        >
        <p>{props.greeting}</p>    
        </Typography> 
    </div>
  )
}

export default ItemListConteiner