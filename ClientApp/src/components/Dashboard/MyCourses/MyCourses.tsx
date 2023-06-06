import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { CourseCard } from "../../CourseCard/CourseCard";

export const MyCourses = () => {
    return(
    <Box px='8%' py='4rem'>
        <Heading as='h1' size='xl'>
            My Courses
        </Heading>
        <Divider />

        <Flex pt='1rem' gap='1rem' wrap='wrap'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </Flex>
    </Box>
        );
}