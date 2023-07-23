import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from '../../Components/AdminComponents/Sidebar'
import { AdminRoute } from '../../Components/AdminComponents/AdminRoute'
import { Navbar } from '../../Components/AdminComponents/Navbar'
import { Route, Routes } from 'react-router-dom'
import { CourseManage } from '../../Components/AdminComponents/CourseManage'
import { UserManage } from '../../Components/AdminComponents/UserManage'


export const AdminHomepage = () => {
  return (
    <>
     <Flex>
     <Sidebar/>
     {/* <Navbar/> */}
     <div>
    <Routes>
    
    <Route path="/admin/coursemanage" element={<CourseManage/>}/>
    <Route path="/admin/usersm" element={<UserManage/>}/>
    </Routes>
    </div>
     </Flex>
   
    
    
    </>
  )
}

