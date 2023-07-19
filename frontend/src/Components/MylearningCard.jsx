import React from 'react'
import { Box, Image, Badge, Grid, useBreakpointValue } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

const MylearningCard = (data) => {
    // const { _id, title, image, author, ratingtotal_ratings, description, price, category, duration } = data

    // const { imageUrl, imageAlt, beds, baths, title, formattedPrice, reviewCount, rating } = data;

    const property = {
        imageUrl: 'https://www.pylenin.com/content/images/2021/08/Bootcamp-1.png',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'web development...',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 3,
    }


    return (
        <Box>
            <Link to="/" style={{textDecoration:'none'}}>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w={'300px'} h={'300px'} textAlign={'left'} border={'1px solid gray'} p={'5'} borderRadius={'10px'}>
                    <Image src={property.imageUrl} alt={property.imageAlt} w={'100%'} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
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
                            noOfLines={1}
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < property.rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default MylearningCard