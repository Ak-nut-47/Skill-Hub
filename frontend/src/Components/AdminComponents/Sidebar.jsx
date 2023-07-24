import { Avatar, Box, Divider, Flex, Heading, IconButton, Text,Image } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {FiHome, FiMenu, FiUsers} from "react-icons/fi"
import { SidebarItem } from './SidebarItem'
import {FaLanguage} from "react-icons/fa"
import {BsCurrencyRupee} from "react-icons/bs"
import {AiOutlineSetting, AiOutlineMail, AiOutlineRead} from "react-icons/ai"
import {BiSupport} from "react-icons/bi"
import {BsFillPenFill} from "react-icons/bs"
import logo from "./skillhub.png"
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  const [navSize,setNavSize]=useState("large")
  return (
    <Flex
      pos="sticky"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize==="small"?"75px":"200px"}
      flexDir="column"
      justifyContent="space-between"
      borderRadius={navSize==="small"?"15px":"30px"}
    >
    <Flex 
      p="5%"
      flexDir="column"
      alignItems={navSize==="small"?"center":"flex-start"}
      as="nav"
    >
     <Flex flexDir={'row'}>

     <IconButton
     border="2px solid #a435f0"
     background="none"
     mt={3}
     _hover={{background:'none'}}
     icon={<FiMenu/>}
     onClick={()=>{
       if(navSize==="small"){
         setNavSize("large")
        }else{
          setNavSize("small")
        }
      }}
      />
     <Box ml={6} display={navSize==="small"?"none":"flex"}>
    <Image src={logo} boxSize="65px"/>
     </Box>
      </Flex>
    <SidebarItem navSize={navSize} icon={FiHome} title="Dashboard" />
    <SidebarItem navSize={navSize} icon={BsFillPenFill} title="Manage Blogs"/>
    <SidebarItem navSize={navSize} icon={AiOutlineRead} title="Course" link="/admin/course"/>
    <SidebarItem navSize={navSize} icon={FiUsers} title="Manage Users" link="/admin/usermanage"/>
    <SidebarItem navSize={navSize} icon={FaLanguage} title="Languages"/>
    <SidebarItem navSize={navSize} icon={BsCurrencyRupee} title="Payment" link="/admin/payment"/>
    <SidebarItem navSize={navSize} icon={AiOutlineSetting} title="Settings"/>
    <SidebarItem navSize={navSize} icon={BiSupport} title="Support"/>
    <SidebarItem navSize={navSize} icon={AiOutlineMail} title="Mail"/>
   





    </Flex>
    <Flex 
      p="5%"
      flexDir="column"
      w="100%"
      alignItems={navSize==="small"?"center":"flex-start"}
      mb={4}   
    >
    <Divider display={navSize==="small"?"none":"flex"}/>
      <Flex mt={4} align="center">
       <Avatar size="sm" src=""/>
          <Flex flexDir="column" ml={4} display={navSize==="small"?"none":"flex"} >
          <Heading as="h3" size="sm">Sanketh Ganiga</Heading>
          <Text color="gray">Admin</Text>
          </Flex>
      </Flex>

    </Flex>
    </Flex>
  )
}
