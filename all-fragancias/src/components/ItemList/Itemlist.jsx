import Item from "../Item/Item";
import React from 'react'



function Itemlist(data = []) {
  return (
    data.map(film => <Item key={film.id} info={film}/>)
  )
}

export default Itemlist