import React from 'react'
import {useEffect,useState} from 'react'
import {Link} from "react-router-dom"
// import data from 'F:\practise\Products Routing\db.json'

export default function AllProducts() {

  const [dataarr,setdataarr]=useState([])

  const fetchproducts=async()=>{
    const res=await fetch(`http://localhost:8080/products`)
    const data=await res.json();
    setdataarr(data);

  }

  useEffect(()=>{
    fetchproducts()
  },[])

  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
        {dataarr?dataarr.map((elem)=>{
          return (
            <Link to={`/products/${elem.id}`}>
            <div style={{boxShadow:"0 0 10px black"}} >
            <h2>{elem.id}</h2>
            <h2>{elem.name}</h2>
            <h2>{elem.price}</h2>
          </div>
            </Link>
          )
        }):<h2>No products</h2>}
      </div>
    </div>
  )
}
