
import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Table = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            setdata(res.data)
        })
    },[])
  return (
    <div style={{marginTop:"120px",height:"600px"} } className="Table-Style"> 
        
        <table border={"1px"} cellSpacing={"0px"} style={{border:"black",marginLeft:"250px",
       }} width={"1000px"}>
            <tr style={{height:"50px",backgroundColor:"#48D1CC",fontFamily:"sans-serif",fontSize:"20px",fontWeight:"400",color:"#191970"}}>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>City</th>
                <th>Suite</th>
                <th>Zip-Code</th>

            </tr>
            {
                data.map(res=>
                    <>
                    <tr>
                    <td width={"250px"} height={"40px"} style={{backgroundColor:"#E0FFFF",textAlign:"center",fontSize:"17px"}}>{res.id}</td>
                    <td width={"350px"} height={"40px"} style={{backgroundColor:"#E0FFFF",textAlign:"center",fontSize:"17px"}}>{res.name}</td>
                    <td width={"300px"} height={"40px"} style={{backgroundColor:"#E0FFFF",textAlign:"center",fontSize:"17px"}}>{res.username}</td>
                    <td width={"270px"} height={"40px"} style={{backgroundColor:"#E0FFFF",textAlign:"center",fontSize:"17px"}}>{res.address.city}</td>
                    <td width={"270px"} height={"40px"} style={{backgroundColor:"#E0FFFF",textAlign:"center",fontSize:"17px"}}>{res.address.suite}</td>
                    <td width={"400px"} height={"40px"} style={{backgroundColor:"#E0FFFF",textAlign:"center",fontSize:"17px"}}>{res.address.zipcode}</td>
                    </tr>
                    
                   </>
                )
            }
        </table>
        </div> 
  )
}

export default Table