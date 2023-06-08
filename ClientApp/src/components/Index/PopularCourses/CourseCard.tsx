import {Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Link} from "@chakra-ui/react";
import { MdSchool } from 'react-icons/md';

import {Link as RouterLink} from "react-router-dom";
import truncateString from "../../../util/truncateString";

export const CourseCard = (props: any) => {
  return(
  <Card maxW='sm' variant={'elevated'}>
      <CardBody>
        <Image
          src={props.image.link}
          alt={props.image.alt}
          borderRadius='lg'
        />
        <Box display='flex' flexDir='row' alignItems='center' flexGrow='1' w={'100%'} flexWrap='wrap' columnGap='.5rem' justifyContent='space-between'>
          <Text color='whiteAlpha.700' fontSize='sm' display='flex' alignItems='center' columnGap='.3rem'><MdSchool/>{props.category}</Text>
        </Box>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title}</Heading>
          <Text>
            {truncateString(props.text, 120)}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link as={RouterLink} to={props.link} ml={'auto'}>
        <ButtonGroup spacing='2' >
          <Button variant='solid' colorScheme='blue'>
            View Course
          </Button>
        </ButtonGroup>
        </Link>
      </CardFooter>
    </Card>
  );
  
}
  