import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import oppenTrailer from '../images/oppen3.png';
const Trailer = () => {
  return (
    <Box
      as='section'
      textAlign='center'
      w='100%'
      h='100%'
      minW='600px'
      minH='200px'
      maxH='800px'
    >
      <VStack>
        <Text
          mr={'1rem'}
          fontSize={'2rem'}
          color={'black'}
          fontWeight={'semibold'}
        >
          Click the button to play
        </Text>
        <Image pb={'2rem'} src={oppenTrailer}></Image>
      </VStack>
    </Box>
  );
};

export default Trailer;
