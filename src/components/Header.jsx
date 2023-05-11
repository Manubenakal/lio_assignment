//import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Box, HStack, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import oppen from '../images/oppen1.jpeg';
const Header = () => {
  return (
    <Box
      as='section'
      color='#F7FAFC'
      bg='#6B46C1'
      pt='30px'
      pb='10px'
      px='32px'
      textAlign='center'
      w='100%'
      h='100%'
      minW='600px'
      minH='200px'
      maxH='800px'
      display={{ base: 'flex', lg: 'block' }}
      justifyContent='center'
    >
      <HStack justify='center' align='center'>
        <Image height={'50px'} src={oppen}></Image>
        <Heading
          fontWeight='800'
          fontSize={{ base: '24px', md: '40px', lg: '56px' }}
          textAlign={'center'}
        >
          OPPENHEIMER
        </Heading>
      </HStack>
    </Box>
  );
};

export default Header;
