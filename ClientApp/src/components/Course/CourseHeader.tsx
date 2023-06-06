import { Avatar, Badge, Box, Button, Card, CardBody, Flex, Heading, LightMode, Link, Stat, StatNumber, Tag, Text } from "@chakra-ui/react"
import { MdGrade, MdOpenInNew, MdPerson, MdSchool, MdSquareFoot, MdTimelapse } from "react-icons/md"

export const CourseHeader = (props: any) => {

    return(
        <Box display='flex' justifyContent='center' alignItems='center' w='100%' minH='520px' bgColor='gray.500' backgroundSize='cover' backgroundPosition='center' backgroundBlendMode='opacity' backgroundImage="url(https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png)">
            <LightMode>
                <Card w={["100%", '60%', '50%', '40%']} bgColor='whiteAlpha.700' p='1rem'>
                    <CardBody display='flex' flexDirection='column'>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Heading as='h1' size='2xl'>Exploring GraphQL: A Query Language for APIs</Heading>
                            <Stat textAlign='right' flexGrow='0'>
                                <StatNumber>
                                    <Badge fontSize='1.3rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> 9.5/10</Badge>
                                </StatNumber>
                            </Stat>
                        </Box>
                        <Box mb='1rem'>
                            <Heading as='h2' size='md' color='gray.700' pt='0'>Computer Science</Heading>
                        </Box>
                        <Box display='flex' columnGap='1rem' mb='1rem'>
                            <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>edX</Flex></Tag>
                            <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{300/24} days</Flex></Tag>
                            <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>Beginner</Flex></Tag>
                        </Box>
                        <Box display='flex' alignItems='center' columnGap='1rem'>
                            <Text fontWeight='bold'>Lectures by: </Text> Prof. Rohit Ravikoti
                        </Box>
                        <Link alignSelf='flex-end' href='https://www.edx.org/course/exploring-graphql-a-query-language-for-apis' isExternal>
                            <Button colorScheme="green">Course website <MdOpenInNew /> </Button>
                        </Link>
                    </CardBody>
                </Card>
            </LightMode>
        </Box>
)
}