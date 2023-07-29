import React from 'react'

export const CourseRow = ({ind,image,title,author,category,description,price,rating,total_ratings,duration,videos,_id,handleabc}) => {
  return (
    <>
     <tr>
         <td>{ind+1}</td> 
   <td><img src={image} alt="" width="50px" /></td>
    <td>{title.substring(0,10)}...</td>
   <td>{author}</td>
   <td>{category}</td>
   <td>{description.substring(0,10)}...</td>
   <td>{price}</td>
   <td>{rating}</td>
   <td>{total_ratings}</td>
   <td>{duration}</td>   
   <td><select style={{width:"50px",marginRight:"0px"}}>
     {videos.map((e,i)=> <option value=
  {[i]}>{videos[i]}</option>)}
</select></td> 
 <td><button style={{background:"#9a03fe",padding:"3px 6px 3px 6px ",borderRadius:'5px',color:"white",fontSize:"15px",border:"none"}}>Edit</button></td>
 <td> <button style={{padding:"3px 6px 3px 6px",background:"red",borderRadius:'5px',color:"white",fontSize:"15px",border:"none"}} onClick={()=>handleabc(_id)} >Delete</button></td>         
         </tr>
    </>
  )
}
