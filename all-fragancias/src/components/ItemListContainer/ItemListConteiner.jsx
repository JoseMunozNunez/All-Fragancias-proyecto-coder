import Itemlist from '../ItemList/Itemlist';
import React, {useState, useEffect} from 'react'

const productos = [
  { id: 1, image : "https://i.ibb.co/0chTgsx/AMOR-AMOR-EDT-30-ML.webp", title : 'Amor Amor'},
  { id: 2, image : "https://i.ibb.co/nPsFFZt/NOA-EDT-100-ML.webp", title : 'Noa'},
  { id: 3, image : "https://i.ibb.co/N6cPZyw/CK-ONE-EDT-200-ML.webp", title : 'CK One'}

];

const ItemListConteiner = () => {

  const [data, setData] = useState([])   

  useEffect (() => {
    const getData = Promise(resolve =>{
      setTimeout(() => {
          resolve(productos)
      }, 2000);
    });
    
    getData.then(res => setData(res))

  }, [])  

  return (
   <Itemlist data = {data}/>    
   
  )
}

export default ItemListConteiner