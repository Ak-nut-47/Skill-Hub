import { Flex, Icon, Menu, MenuButton, Text,Link } from '@chakra-ui/react'
import React from 'react'
import {useNavigate } from 'react-router-dom'

export const SidebarItem = ({navSize,title,icon,active,link}) => {
    const navigate=useNavigate()
  return (
    <Flex
     flexDir="column"
     w="100%"
     alignItems={navSize==="small"?"center":"flex-start"}
    >
    <Menu placement='right'>
        <Link
         backgroundColor={active && "#a435f0"}
         p={3}
         borderRadius={8}
         _hover={{textDecoration:"none",backgroundColor:"#9900ff"}}
         w={navSize==="large" && "100%"}
         onClick={()=>navigate(link)}
        >
        <MenuButton w="100%">
            <Flex>
                <Icon as={icon} fontSize={'l'} color={active?"white":"black"}/>
                <Text ml={5} display={navSize==="small"?"none":"flex" } fontFamily={"Poppins"}>
                    {title}
                </Text>
            </Flex>
        </MenuButton>
        </Link>




        
        
        </Menu>     

    </Flex>
  )
}
