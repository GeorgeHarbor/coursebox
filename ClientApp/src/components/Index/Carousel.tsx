import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  DarkMode,
  LightMode,
  Link
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {Link as RouterLink } from 'react-router-dom';

import { MdOpenInNew } from 'react-icons/md';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Carousel(props: {cards: Array<CarouselCard>}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <DarkMode>
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          backgroundColor='rgba(0,0,0,0.5)'
          onClick={() => slider?.slickPrev()}
          
          >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          backgroundColor='rgba(0,0,0,0.5)'
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
      </DarkMode>
      {/* Slider */}
      <LightMode>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {props.cards.map((card, index) => (
            <Box
              key={index}
              height={'6xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  top='50%'
                  transform='translateY(20%)'
                  backgroundColor="rgba(255,255,255,0.9)"
                  px="2rem"
                  py="2rem"
                  shadow={"md"}
                  >
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="#333">
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                    {card.text}
                  </Text>
                  <Link as={RouterLink} to={card.link} isExternal alignSelf={'flex-end'} w='30%' zIndex='9999'>
                    <Button colorScheme="green" size="sm" rightIcon={<MdOpenInNew />} >
                      View Course
                    </Button>
                  </Link>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </LightMode>
    </Box>
  );
}
