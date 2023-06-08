import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";

export const CourseBody = (props: {course: Course | undefined}) => {
    return(
        <Box flexGrow='2'>
            <Heading as='h1' size='2xl'>
                {props.course?.name}
            </Heading>
            <Stack pt='1rem'>
                {props.course?.description.split(".").map((v, i) => {
                    return <Text key={i} mb='1rem'>
                                {v}
                            </Text>
                })}
                
                <Link mt='1rem' alignSelf='flex-end' href={props.course?.link} isExternal>
                    <Button colorScheme="green">Course website <MdOpenInNew /> </Button>
                </Link>
            </Stack>
        </Box>
        );
}