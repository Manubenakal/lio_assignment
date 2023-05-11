import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import oppen_main from '../images/oppen2.jpeg';

const Main = () => {
  const movie = {
    cast: ['Cilian Murphy', 'Robert Downey Jr', 'Florence Pugh'],
  };
  return (
    <Container
      maxWidth={'container.xl'}
      w='100%'
      h='100%'
      minW='600px'
      minH='200px'
      maxH='800px'
    >
      <HStack
        pt={'2rem'}
        spacing={{ base: '1rem', md: '1rem', lg: '2rem' }}
        pb={'2rem'}
        wrap='wrap'
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        justify='center'
        align='center'
      >
        <Image src={oppen_main}></Image>
        <VStack align='start' textAlign='left' minW={'400px'} pt={'1rem'}>
          <Heading>Oppenheimer (2023)</Heading>

          <Text>
            <b>Released:</b> 2023
          </Text>
          <Text>
            <b>Director:</b> Christopher Nolan
          </Text>
          <Text>
            <b>Cast:</b> {movie.cast.join(', ')}
          </Text>
          <Text>
            <b>Summary :</b> The film follows the life of theoretical physicist
            J. Robert Oppenheimer, the director of the Los Alamos Laboratory
            during the Manhattan Project in World War II, and his contributions
            that led to the creation of the atomic bomb.
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Main;
