import React from 'react'
import { Box, Image, Badge, Grid, useBreakpointValue } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom';

const MylearningCard = ({ data }) => {
    const { id, title, image, author, total_ratings, rating, description, price, category, duration } = data;
    console.log(data)

    const property = {
        id: 1,
        imageUrl: image, // Remove curly braces
        imageAlt: 'Rear view of modern course with detail',
        title: title, // Remove curly braces
        formattedPrice: price, // Remove curly braces
        reviewCount: total_ratings, // Remove curly braces
        rating: rating, // Remove curly braces
        duration: duration,
        category:category

    };

    return (
        <Box>
            <Link to={`/singlevideo/${id}`} style={{ textDecoration: 'none' }}>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w={'300px'} h={'390px'} textAlign={'left'} border={'1px solid gray'} p={'5'}  boxShadow={'xl'} margin={'auto'} mb={'10px'}>
                    <Image src={property.imageUrl} alt="" w={'100%'} h={'150px'} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
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
                            numberOfLines={1} // Change 'noOfLines' to 'numberOfLines'
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / month
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                    // Remove the 'color' attribute
                                    // The color will be automatically determined based on the condition
                                    // i < property.rating ? 'teal.500' : 'gray.300'
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                        <Box>
                            Duration : {property.duration}
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

export default MylearningCard;
