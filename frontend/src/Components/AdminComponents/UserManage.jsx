import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Sidebar} from "./Sidebar"
import { Flex ,Box } from '@chakra-ui/react'
import { AdminNavbar} from './AdminNavbar'
import { UsersCard } from './UsersCard'
import LoadingComponent from '../LoadingComponents/LoadingComponent'


export const UserManage = () => {
const [users,setUsers]=useState([])


const getdata=async()=>{
    try{
        let res=await axios.get("https://anxious-bull-glasses.cyclic.app/adminuser",{
          headers:{
            "Content-Type":'application/json',
            authorization: `Bearer ${localStorage.getItem("adminToken")}`
           }
        })
        setUsers(res.data.course)
       

    }catch(err){
        console.log(err)
    }
}

useEffect(()=>{
getdata()
   

},[])

console.log(users)

  return (
    <>
      <AdminNavbar title={"Manage Users"}/>
      <Flex>
      <Flex >
      <Sidebar/>
      </Flex>
      <Flex  w="100%">

          <Box mt={"100px"}>
      <div style={{display:"flex",fontWeight:"bold", justifyContent:"space-around",width:"85vw",border:"2px solid #9a03fe",padding:"30px 0px 30px 0px",borderRadius:'10px'}}>
   <p>Sr.No</p> 
   <p style={{marginLeft:"-30px"}}>UserID</p>
   <p>Name</p>
   <p>Email</p>
   <p>Gender</p>
   <p>Phone No.</p>
   <p>Cart Items</p>
   <p>My Learning</p>
   <p>Edit</p>
   <p style={{paddingRight:"10px"}}>Delete</p>
    </div>
      {
        users.length>0 ? users.map((el,ind)=><UsersCard key={ind} ind={ind} {...el}/>):<div style={{display:"flex",justifyContent:"center",height:"100px",marginTop:"150px"}}>
        <LoadingComponent /></div>
      }
      </Box>
      
      </Flex>
    </Flex>
    </>
  )
}

