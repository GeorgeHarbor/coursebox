import {Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Link} from "@chakra-ui/react";
import { MdOpenInNew, MdPublic, MdSchool } from 'react-icons/md';
export const CourseCard = (props: any) => {
  const handleViewCourse = () => {
    return;
  };

  return(
  <Card maxW='sm' variant={'elevated'}>
      <CardBody>
        <Image
          src={props.image.link}
          alt={props.image.alt}
          borderRadius='lg'
        />
        <Box display='flex' flexDir='row' alignItems='center' flexGrow='1' w={'100%'} flexWrap='wrap' columnGap='.5rem' justifyContent='space-between'>
          <Text color='whiteAlpha.700' fontSize='sm' display='flex' alignItems='center' columnGap='.3rem'><MdSchool/>Computer Science</Text>
          <Text color='whiteAlpha.700' fontSize='sm' display='flex' alignItems='center' columnGap='.3rem'><MdPublic/><Link href="https://harvard.edu" isExternal display='flex' alignItems='center' columnGap='.2rem'>Harvard <MdOpenInNew/></Link></Text>
        </Box>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title}</Heading>
          <Text>
            {props.text}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2' ml={'auto'}>
          <Button variant='solid' colorScheme='blue' onClick={handleViewCourse}>
            View Course
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
  
}
  