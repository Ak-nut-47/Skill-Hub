import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Sidebar} from "./Sidebar"
import { Box, Button, Flex} from '@chakra-ui/react'
import { AdminNavbar } from './AdminNavbar'
import { CourseCard } from './CourseCard'
import LoadingComponent from "../LoadingComponents/LoadingComponent"
import "./CourseManage.css"
import { CourseRow } from './CourseRow'

export const CourseManage = () => {
const [data,setData]=useState([])

const handleabc=(id)=>{

  fetch(`https://anxious-bull-glasses.cyclic.app/admincourse/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('adminToken')}`,
    },
  }).then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
 
}


const getdata=async()=>{
    try{
        let res=await axios.get("https://anxious-bull-glasses.cyclic.app/admincourse",{
           headers:{
            "Content-Type":'application/json',
            authorization: `Bearer ${localStorage.getItem("adminToken")}`
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
    <>
      <AdminNavbar title={"Course"} />
     <Flex>
      <Flex >
      <Sidebar/> 
      </Flex>
      <Flex  w="100%">
      <Box mt={"100px"}>
      <CourseCard/>
      <div style={{width:"1160px"}}>
      <table className="notes-table">
      <thead>
        <tr>  
   <th style={{marginLeft:"-10px"}}>Sr.No</th> 
   <th>Image</th>
   <th>Title</th>
   <th>Author</th>
   <th>Category</th>
   <th>Description</th>
   <th>Price</th>
   <th>Rating</th>
   <th>Total_ratings</th>
   <th>Duration</th>
   <th>Videos</th>
   <th>Edit</th>
   <th style={{paddingRight:"10px"}}>Delete</th>
   </tr>
   </thead>
   <tbody>
      {
        data.length>0 ? data.map((el,ind)=><CourseRow key={ind} ind={ind} {...el} handleabc={handleabc}/>  ):<div style={{display:"flex",justifyContent:"center",height:"100px",marginTop:"150px"}}>
          <LoadingComponent /></div>
      }
      </tbody>
      </table>
      </div>
      </Box>
      
      </Flex>
    </Flex>
    </>
  )
}
