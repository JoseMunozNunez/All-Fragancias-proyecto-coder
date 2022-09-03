import React,{useEffect, useState} from 'react';


function ItemCount( {initial, stock, onAdd}) {

    const [count, setCount] = useState(parseInt(initial))

    const aumentar  = ()=>{
        setCount(count + 1)
    }

    const disminuir  = ()=>{
        setCount(count - 1)
    }

    useEffect(() => {
      setCount(parseInt(initial));

    }, [initial])
    


  return (
    <div className='counter'>
        <button disabled={count <= 1} onClick={disminuir}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={aumentar}>+</button>
        <div>
            <button disabled = {stock >= 0} onClick = {() => onAdd(count)}> Agregar al carrito </button>
        </div>

    </div>
  )
}

export default ItemCount