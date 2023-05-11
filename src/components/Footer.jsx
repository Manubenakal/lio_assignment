import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { ImageRow } from './ImageRow';
import tenet from '../images/tenet.jpeg';
import inst from '../images/interstellar.jpeg';
import inception from '../images/inception.jpeg';
import memento from '../images/memento.jpeg';
const Footer = () => {
  const images = [
    {
      url: tenet,
      title: 'Tenet',
    },
    {
      url: inst,
      title: 'Interstellar',
    },
    {
      url: memento,
      title: 'Memento',
    },
    {
      url: inception,
      title: 'Inception',
    },
  ];

  return (
    <Box
      as='section'
      color='#F7FAFCbl'
      bg='#6B46C1'
      pt='30px'
      pb='25px'
      px='32px'
      textAlign='center'
      w='100%'
      h='100%'
      minW='600px'
      minH='200px'
      maxH='800px'
    >
      <VStack>
        <Text fontSize={'2rem'} fontWeight={'bold'} color={'white'}>
          Reccomendations
        </Text>

        <ImageRow images={images} />
      </VStack>
    </Box>
  );
};

export default Footer;
