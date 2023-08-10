import React, { useEffect, useState } from 'react'

export default function AllProducts() {
  const [dataarr,setdata]=useState([])

  const fetchdata=async()=>{
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    let data=await res.json()
    console.log(data);
    setdata(data.data)                                                    
  }
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
          {/* Map the below div against product data */
          dataarr.map((elem,index)=>{
            return <div style={{boxShadow: "0 0 10px black"}} >
            <h3 className = "name"> {elem.title}</h3>
            <div className= "brand">{elem.brand}</div>
            <div className = "price">{elem.price}</div>
        </div>
          })
          }
            
      </div>
    </div>
  )
}