import React,{useEffect, useState} from 'react';


function ItemCount( iniciar, stock, onAdd) {

    const [count, setCount] = useState(parseInt(iniciar))

    const aumentar  = ()=>{
        setCount(count + 1)
    }

    const disminuir  = ()=>{
        setCount(count - 1)
    }

    useEffect(() => {
      setCount(parseInt(iniciar));

    }, [iniciar])
    


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