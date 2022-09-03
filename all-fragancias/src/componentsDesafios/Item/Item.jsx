import './Item.css'

import React from 'react'

function Item({info}) {
  return (
    <a href='' className='films'>
        <img src={info.image} alt=''/>
        <p>{info.title}</p>
    </a>
  )
}

export default Item