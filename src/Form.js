import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  const [username,setusername]=useState("")
  const [firstname,setfirstname] =useState("")   
  const [dateofbirth,setdateofbirth] =useState("") 
  const [phonenumber,setphonenumber] =useState("")    
  const [email,setemail] =useState("")     
  const [country,setcountry] =useState("") 
  const [state,setstate] =useState("") 
  const [city,setcity] =useState("") 
       
  const [data,setdata]=useState([]);
  const [view,setview]=useState(true)
  const HandleChange=(e)=>{
    // setdata((prevdata)=>{
    //   return [...prevdata,name]
    // })
    e.preventDefault();
    const obj={
      username:username,
      dateofbirth:dateofbirth,
      email:email,
      firstname:firstname,
      phonenumber:phonenumber,
      state:state,
      country:country,
      city:city
    }
    let arr=data;
    arr.push(obj)
    setdata(data)
      setview(!view)
  }
  const BackToForm =()=>{
    setview(!view)
  }
  return (
     
    
    <div className='form' >
        
           <h2 style={{marginLeft:"650px",fontSize:"35px",color:"#FF6347"}}>User-Details:</h2>
           {
            view ? 
           
            <form >
                
            <div className='form-div' >
            <div style={{marginTop:"50px"}}>
           
            <label className='label-heading'>FirstName:</label><br/>
            <input type="text" name={firstname} value={firstname}  onChange={(e)=>setfirstname(e.target.value)} className="inputField"/><br/>

            <label className='label-heading'>UserName:</label><br/>
            <input type="text" name={username} value={username}  onChange={(e)=>setusername(e.target.value)} className="inputField"/><br/>

            <label className='label-heading'>DateOfBirth:</label><br/>
            <input type="date" name={dateofbirth} value={dateofbirth}  onChange={(e)=>setdateofbirth(e.target.value)} className="inputField"/><br/>

            <label className='label-heading'>PhoneNumber:</label><br/>
            <input type="number" name={phonenumber} value={phonenumber}  onChange={(e)=>setphonenumber(e.target.value)} className="inputField"/><br/>
            </div>

            <div style={{marginTop:"50px"}}>
            <label className='label-heading'>Email:</label><br/>
            <input type="email" name={email} value={email}  onChange={(e)=>setemail(e.target.value)} className="inputField"/><br/>

            <label className='label-heading'>Country:</label><br/>
            <input type="text" name={country} value={country}  onChange={(e)=>setcountry(e.target.value)} className="inputField"/><br/>

            <label className='label-heading'>State:</label><br/>
            <input type="text" name={state} value={state}  onChange={(e)=>setstate(e.target.value)} className="inputField"/><br/>

            <label className='label-heading'>City</label><br/>
            <input type="text" name={city} value={city}  onChange={(e)=>setcity(e.target.value)}  className="inputField"/><br/>
            </div>
           
            </div>
            <div className='Form-buttons'>
                <button className='submitbtn btn-style' onClick={HandleChange}>Submit</button>
                <Link to="/userdetails"><button className='backbtn btn-style'>Back</button></Link>
            </div>
            
            </form>
 : 
            <div>
              {
                data.map(res=>
                  <div style={{display:"flex",justifyContent:"space-evenly",}}>
                   
                   <h3>Firstname:{res.firstname},</h3>
                   <h3>username:{res.username}, </h3> 
                   <h3>Dob:{res.dateofbirth},</h3>
                   <h3>PhoneNumber:{res.phonenumber},</h3>
                   <h3>Country:{res.country},</h3> 
                   <h3>State:{res.state},</h3>
                   <h3>City:{res.city},</h3>
                   <h3>Email:{res.email},</h3>
                   <hr/>
                   </div>
                
                )
              }
              <button onClick={BackToForm} className='backbtn btn-style'>Back</button>
            </div>
}
    </div>
  )
}

export default Form