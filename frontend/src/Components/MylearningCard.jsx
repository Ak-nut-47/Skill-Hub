import React, { useState } from 'react'
import { Box, Image, Badge, Grid, Flex, Button, border } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom';

const MylearningCard = ({ data, handleRemoveCourse }) => {
    const { _id, title, image, author, total_ratings, rating, description, price, category, duration } = data;
    // console.log(data)

    const property = {
        id: 1,
        imageUrl: image,
        imageAlt: 'Rear view of modern course with detail',
        title: title,
        formattedPrice: price,
        reviewCount: total_ratings,
        rating: Math.floor(rating),
        duration: duration,
        category: category

    };

    return (
        <Box>
            {/* <Link to={`/singlevideo/${_id}`} style={{ textDecoration: 'none' }}> */}
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w={'300px'} textAlign={'left'} border={'1px solid gray'} p={'5'} _hover={{
                boxShadow: '2xl'
            }} margin={'auto'} mb={'10px'}>
                <Image src={property.imageUrl} alt="" w={'100%'} h={'150px'} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='green'>
                            New
                        </Badge>
                        <Box ml={'10px'} color={'purple'} as='b'>
                            {property.category}
                        </Box>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                        </Box>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        numberOfLines={1}
                    >
                        {property.title.slice(0,40)}
                    </Box>

                    {/* <Box>
                            {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / month
                            </Box>
                        </Box> */}

                    <Box fontSize={'14px'}>
                        {/* {description.split(",")[0].length > 15
                            ? description.split(".")[0]
                            : description.split(",")[0]} */}
                            {
                                description?.slice(0,58)
                            }
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < property.rating ? 'orange' : 'gray.300'}
                                />
                            ))}
                        <Box as='span' ml='2' color='orange' fontSize='sm'>
                            {property.reviewCount} reviews
                        </Box>
                    </Box>
                    <Box color={'#a435f0'}>
                        Duration : {property.duration}
                    </Box>
                    <Flex justifyContent={'space-around'}>
                        <Box mt={'10px'}>
                            <Button color={'#a435f0'} _hover={{
                                color: 'white',
                                backgroundColor: '#a435f0',
                                border: '1px solid #a435f0'
                            }} onClick={() => handleRemoveCourse(_id)}>Remove</Button>
                        </Box>
                        <Box mt={'10px'}>
                            <Link to={`/singlevideo/${_id}`}>
                                <Button color={'#a435f0'} _hover={{
                                    color: 'white',
                                    backgroundColor: '#a435f0',
                                    border: '1px solid #a435f0'
                                }}>Explore {'->'}</Button>
                            </Link>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            {/* </Link> */}
        </Box>
    );
};

export default MylearningCard;
