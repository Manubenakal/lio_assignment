import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
export function ImageRow({ images }) {
  return (
    <HStack spacing='20px'>
      {images.map((image, index) => (
        <Box key={index} textAlign='center'>
          <Image
            key={index}
            src={image.url}
            alt={`Image ${index + 1}`}
            boxSize='250px'
            objectFit='cover'
            borderRadius='md'
            boxShadow='md'
            title={image.title}
          />
          <Text color={'white'} mt='10px' fontWeight='bold'>
            {image.title}
          </Text>
        </Box>
      ))}
    </HStack>
  );
}
