import { Box, Flex } from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CourseHeader } from "../components/Course/CourseHeader";
import { CourseBody } from "../components/Course/CourseBody";
import { CourseDetails } from "../components/Course/CourseDetails";

export const CoursePage = () => {

    return (
        <>
            <Navigation/>
            <Box id='content'>
                <CourseHeader/>
                <Box px={["1%", "5%", "10%", "20%"]} py='3rem'>
                    <Flex flexDirection={['column', 'column', 'column', 'column', 'row']} justifyContent='space-between' columnGap='1rem' rowGap='1rem'>
                        <CourseBody />
                        <CourseDetails />
                    </Flex>
                </Box>

            </Box>
            <Footer />
        </>
    );
}