
import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemListConteiner = () => {

  const onAdd = (cantidad) =>{
    console.log(`has agregado ${cantidad} a tu carrito `)

  }

  return (
    <div>
        <ItemCount iniciar={3} stock={10} onAdd={onAdd} />
    </div>
  )
}

export default ItemListConteiner