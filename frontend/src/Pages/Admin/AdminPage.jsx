import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from '../../Components/AdminComponents/Sidebar'
import { AdminNavbar } from '../../Components/AdminComponents/AdminNavbar'


export const AdminHomepage = () => {
  return (
    <>
     <Flex>
     <Sidebar/>
     <AdminNavbar/>
     </Flex>
   
    
    
    </>
  )
}

