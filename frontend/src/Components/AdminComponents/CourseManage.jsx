import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const CourseManage = () => {
const [data,setData]=useState([])


const getdata=async()=>{
    try{
        let res=await axios.get("https://anxious-bull-glasses.cyclic.app/admincourse",{
           headers:{
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjRiYTg5NjRkODgwOTk0MzAyM2Q0MDUwIiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY5MDEyODAxNiwiZXhwIjoxNjkwMjE0NDE2fQ.jv11vpyuRH3JHLwmrMrDCxdLxR7YyEzySWpPw9Jah88"
           }
        })
        setData(res.data.course)

    }catch(err){
        console.log(err)
    }
}

useEffect(()=>{
getdata()
   

},[])

console.log(data)

  return (
    <div>
    {data.length>0 ?<p>Trye</p>:<p>False</p>} 
    </div>
  )
}
