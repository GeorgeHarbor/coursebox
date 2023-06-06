import { Badge, Box, Card, CardBody, CardHeader, Divider, Heading, List, ListIcon, ListItem, Tag, Wrap, WrapItem } from "@chakra-ui/react"
import { MdBookmark, MdGrade, MdSchool, MdSquareFoot, MdTimelapse } from "react-icons/md"

export const CourseDetails = () => {

    return(
        <Box flexGrow='1' maxW='30%'>
            <Card>
                <CardHeader pb='.5rem'>
                    <Heading as='h3' size='md'>
                    Exploring GraphQL: A Query Language for APIs
                    </Heading>
                </CardHeader>
                <CardBody>
                    <List>
                        <ListItem mb='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                                <ListIcon as={MdTimelapse}/>Duration:
                            </Tag> 
                            {300 / 24} hours
                        </ListItem>
                        <Divider/>
                        <ListItem mb='.5rem' mt='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                            <ListIcon as={MdGrade}/> Rating: 
                            </Tag>
                            9.5/10
                        </ListItem>
                        <Divider/>
                        <ListItem mb='.5rem' mt='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                                <ListIcon as={MdSchool}/> School:
                            </Tag>
                            edX
                        </ListItem>
                        <Divider/>
                        <ListItem mb='.5rem' mt='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                                <ListIcon as={MdSquareFoot}/> Level:
                            </Tag>
                            Beginner
                        </ListItem>
                    </List>
                    <Divider mt='0.5rem' mb='0.5rem'/>
                    <Wrap>
                        <WrapItem>
                            <Badge colorScheme="blue" variant='subtle'>
                                Query Languages
                            </Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme="blue" variant='subtle'>
                            Software Engineering
                            </Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme="blue" variant='subtle'>
                            Front End Design
                            </Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme="blue" variant='subtle'>
                            GraphQL
                            </Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme="blue" variant='subtle'>
                            Application Programming Interface (API)
                            </Badge>
                        </WrapItem>
                    </Wrap>
                </CardBody>
            </Card>
        </Box>
    )
}