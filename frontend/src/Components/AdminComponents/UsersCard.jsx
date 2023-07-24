
import React from 'react'

export const UsersCard = ({email,gender,mylearning,name,phone,cart,_id,ind}) => {


  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"30px 0px 30px 0px"}}>
   <p style={{paddingLeft:"30px"}}>{ind+1}</p> 
   <select style={{width:"50px",marginRight:"0px"}}>
    <option value={_id}>{_id}</option>
</select>
   <p>{name}</p>
   <p>{email}</p>
   <p>{gender}</p>
   <p>{phone}</p>
   <select style={{width:"50px",marginRight:"0px"}}>
   {cart.map((e,i)=> <option value=
  {[i]}>{cart[i]}</option>)}
</select>
<select style={{width:"50px",marginRight:"0px"}}>
   {mylearning.map((e,i)=> <option value=
  {[i]}>{mylearning[i]}</option>)}
</select>
  <button style={{background:"#9a03fe",padding:"5px 10px 5px 10px ",borderRadius:'10px',color:"white",border:"none"}}>Edit</button>
  <button style={{padding:"12px 7px 10px 12px ",background:"red",borderRadius:'10px',color:"white",border:"none"}}>Delete</button>
  <hr/>
    </div>
  )
}
