import React from 'react'
import {useParams } from "react-router-dom"
import {useState,useEffect} from 'react'

export default function ProductDetails() {
  const [dataobj,setdataobj]=useState({})
  const {id}=useParams();

  const fetchdata=async(id)=>{
    const res=await fetch(`http://localhost:8080/products/${id}`)
    const data=await res.json()
    setdataobj(data);
  }
  useEffect(()=>{
    fetchdata(id)
  },[])

  return (
    <div data-testid = "product-details" >
      <div>
      {/* show product details here */
      <div>
       <h2>{dataobj.id}</h2> 
       <h2>{dataobj.name}</h2> 
       <h2> {dataobj.price}</h2>
       
      </div>

      
      }
      </div>
    </div>
  )
}
