
import React from 'react'

export const CourseCard = ({author,category,description,duration,image,price,rating,title,total_ratings,videos,_id,ind}) => {


  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"30px 0px 30px 0px"}}>
   <p style={{paddingLeft:"30px"}}>{ind+1}</p> 
   <img src={image} alt="" width="50px" />
   <p>{title.substring(0,10)}...</p>
   <p>{author}</p>
   <p>{category}</p>
   <p>{description.substring(0,10)}...</p>
   <p>{price}</p>
   <p>{rating}</p>
   <p>{total_ratings}</p>
   <p>{duration}</p>
   <select style={{width:"50px",marginRight:"0px"}}>
   {videos.map((e,i)=> <option value=
  {[i]}>{videos[i]}</option>)}
</select>
  <button style={{background:"#9a03fe",padding:"5px 10px 5px 10px ",borderRadius:'10px',color:"white",border:"none"}}>Edit</button>
  <button style={{padding:"12px 7px 10px 12px ",background:"red",borderRadius:'10px',color:"white",border:"none"}}>Delete</button>
  <hr/>
    </div>
  )
}
