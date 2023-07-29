
import React from 'react'

export const AdminPaymentCard = ({email,gender,mylearning,name,phone,cart,_id,ind,payment}) => {

    const sum = payment.map(Number).reduce((acc, curr) => acc + curr, 0);
  return (
    <div style={{display:"flex",justifyContent:"space-between",textAlign:"center",padding:"30px 0px 30px 0px"}}>
   <p style={{paddingLeft:"30px"}}>{ind+1}</p> 
   <select style={{width:"50px",marginRight:"0px"}}>
    <option value={_id}>{_id}</option>
</select>
   <p>{name}</p>
   <p>{email}</p>
   <select style={{width:"50px",marginRight:"0px"}}>
   {cart.map((e,i)=> <option value=
  {[i]}>{cart[i]}</option>)}
</select>
<select style={{width:"50px",marginRight:"0px"}}>
   {mylearning.map((e,i)=> <option value=
  {[i]}>{mylearning[i]}</option>)}
</select>
  <p>{sum}</p>
  <button style={{background:"#9a03fe",padding:"5px 10px 5px 10px ",borderRadius:'10px',color:"white",border:"none"}}>Edit</button>
  <button style={{padding:"12px 7px 10px 12px ",background:"red",borderRadius:'10px',color:"white",border:"none"}}>Delete</button>
  <hr/>
    </div>
  )
}


