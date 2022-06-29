import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className='form' >
        
           <h2 style={{marginLeft:"650px",fontSize:"35px",color:"#FF6347"}}>User-Details:</h2>
            <form >
                
            <div className='form-div' >
            <div style={{marginTop:"50px"}}>
           
            <label className='label-heading'>FirstName:</label><br/>
            <input type="text"  className="inputField"/><br/>

            <label className='label-heading'>UserName:</label><br/>
            <input type="text"  className="inputField"/><br/>

            <label className='label-heading'>DateOfBirth:</label><br/>
            <input type="date"  className="inputField"/><br/>

            <label className='label-heading'>PhoneNumber:</label><br/>
            <input type="number"  className="inputField"/><br/>
            </div>

            <div style={{marginTop:"50px"}}>
            <label className='label-heading'>Email:</label><br/>
            <input type="email"  className="inputField"/><br/>

            <label className='label-heading'>Country:</label><br/>
            <input type="text"  className="inputField"/><br/>

            <label className='label-heading'>State:</label><br/>
            <input type="text"  className="inputField"/><br/>

            <label className='label-heading'>City</label><br/>
            <input type="text"  className="inputField"/><br/>
            </div>
           
            </div>
            <div className='Form-buttons'>
                <button className='submitbtn btn-style'>Submit</button>
                <Link to="/userdetails"><button className='backbtn btn-style'>Back</button></Link>
            </div>
            
            </form>
            
        
    </div>
  )
}

export default Form