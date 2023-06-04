import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";

export const CourseBody = (props: any) => {
    return(
        <Box flexGrow='2'>
            <Heading as='h1' size='2xl'>
                Exploring GraphQL: A Query Language for APIs
            </Heading>
            <Stack pt='1rem'>
                <Text>
                    If you are a programmer, this course will help you gain the skills you need to get started using GraphQL for a small project or professionally in production.
                </Text>
                <Text>
                    You’ll feel comfortable getting started with the right tools for your use case. 
                </Text>
                <Text>
                    If you are nontechnical, this course will help you communicate with developers and participate in conversations about GraphQL. 
                </Text>
                <Text>
                    You will understand when and why to use GraphQL for a project. Start your GraphQL journey today!   
                </Text>
                
                <Link mt='1rem' alignSelf='flex-end' href='https://www.edx.org/course/exploring-graphql-a-query-language-for-apis' isExternal>
                    <Button colorScheme="green">Course website <MdOpenInNew /> </Button>
                </Link>
            </Stack>
        </Box>
        );
}