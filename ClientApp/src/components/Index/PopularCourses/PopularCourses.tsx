import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { CourseCard } from './CourseCard';

interface Props {
    courses: Array<TPopularCourse>;
}
 
const PopularCourses = (props: Props) => {
    return (
        <Box py='3rem' backgroundColor={useColorModeValue('gray.300', 'gray.800')}>
            <Box mx="10%">
                <Heading py='1rem'>Popular Courses</Heading>
                <Text fontSize='md' mb="1rem">Discover courses which others liked the most</Text>
            </Box>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="2rem" mx="10%">
                {props.courses.map((v, i) => {
                    return <CourseCard key={i} image={{link: v.image.link, alt: v.image.alt}} title={v.title} text={v.text} link={v.link} category={v.category}></CourseCard>
                })}
            </SimpleGrid>
        </Box>);
}

 
export default PopularCourses;