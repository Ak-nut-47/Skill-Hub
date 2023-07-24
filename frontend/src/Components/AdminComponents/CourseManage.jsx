import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Sidebar} from "./Sidebar"
import { Box, Button, Flex } from '@chakra-ui/react'
import { AdminNavbar } from './AdminNavbar'
import { CourseCard } from './CourseCard'
import LoadingComponent from "../LoadingComponents/LoadingComponent"


export const CourseManage = () => {
const [data,setData]=useState([])



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
      <Box marginLeft={"-1150px"}>
      <Button backgroundColor={"#9a03fe"} color={"white"} marginBottom={"10px"}>Add Course</Button>
      </Box>
      <div style={{display:"flex",fontWeight:"bold", justifyContent:"space-evenly",width:"85vw",border:"2px solid #9a03fe",padding:"30px 0px 30px 0px",borderRadius:'10px'}}>
   <p>Sr.No</p> 
   <p style={{marginLeft:"-30px"}}>Image</p>
   <p>Title</p>
   <p>Author</p>
   <p>Category</p>
   <p>Description</p>
   <p>Price</p>
   <p>Rating</p>
   <p>Total_ratings</p>
   <p>Duration</p>
   <p>Videos</p>
   <p>Edit</p>
   <p style={{paddingRight:"10px"}}>Delete</p>
    </div>
      {
        data.length>0 ? data.map((el,ind)=><CourseCard key={ind} ind={ind} {...el}/>):<div style={{display:"flex",justifyContent:"center",height:"100px",marginTop:"150px"}}>
          <LoadingComponent /></div>
      }
      </Box>
      
      </Flex>
    </Flex>
    </>
  )
}
