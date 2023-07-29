
import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure,ModalFooter } from '@chakra-ui/react'

export const CourseCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
const initialRef = React.useRef(null)
const finalRef = React.useRef(null)
const [imageurl,setImageUrl]=useState("")
const [title,setTitle]=useState("")
const [author,setAuthor]=useState("")
const [category,setCategory]=useState("")
const [description,setDescription]=useState("")
const [price,setPrice]=useState("")
const [duration,setDuration]=useState("")
const [videos,setVideos]=useState([])


const handleAdd=()=>{
  let obj={
     image:imageurl,
     title:title,
     author:author,
     category:category,
     description:description,
     price:Number(price),
     rating:0,
     total_ratings:0,
     duration:duration,
     videos:videos
  }
  fetch(`https://anxious-bull-glasses.cyclic.app/admincourse/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
      body:JSON.stringify(obj)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  console.log(JSON.stringify(obj))
}

const handleVideos = (value, index) => {
  const updatedVideos = [...videos];
  updatedVideos[index] = value;
  setVideos(updatedVideos);
}


  
  return (
     <>
           <Box marginLeft={"-1000px"}>
      <Button backgroundColor={"#9a03fe"} color={"white"} marginBottom={"10px"} onClick={onOpen}>Add Course</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image Url</FormLabel>
              <Input ref={initialRef} placeholder='Image Url' value={imageurl} onChange={(e)=>setImageUrl(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Author</FormLabel>
              <Input placeholder='Author' value={author} onChange={(e)=>setAuthor(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input placeholder='Category' value={category} onChange={(e)=>setCategory(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input placeholder='Rating' value={0} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Total Ratings</FormLabel>
              <Input placeholder='Total Ratings' value={0} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input placeholder='Duration' value={duration} onChange={(e)=>setDuration(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Video</FormLabel>
              <Input placeholder='Video' onChange={(e)=>handleVideos(e.target.value,0)} />
              <Input placeholder='Video' onChange={(e)=>handleVideos(e.target.value,1)} />
              <Input placeholder='Video' onChange={(e)=>handleVideos(e.target.value,2)} />
              <Input placeholder='Video' onChange={(e)=>handleVideos(e.target.value,3)} />
              <Input placeholder='Video' onChange={(e)=>handleVideos(e.target.value,4)}  />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleAdd}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
     
     
     </>
  )
}
