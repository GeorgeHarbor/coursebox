import { Badge, Box, Card, CardBody, CardHeader, Divider, Heading, List, ListIcon, ListItem, Tag, Wrap, WrapItem } from "@chakra-ui/react"
import { MdBookmark, MdGrade, MdSchool, MdSquareFoot, MdTimelapse } from "react-icons/md"

export const CourseDetails = (props: {course: Course | undefined, school: School | undefined}) => {

    return(
        <Box flexGrow='1' maxW='30%'>
            <Card>
                <CardHeader pb='.5rem'>
                    <Heading as='h3' size='md'>
                        {props.course?.name}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <List>
                        <ListItem mb='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                                <ListIcon as={MdTimelapse}/>Duration:
                            </Tag> 
                            {(props.course?.duration ?? 24) / 24} day(s)
                        </ListItem>
                        <Divider/>
                        <ListItem mb='.5rem' mt='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                            <ListIcon as={MdGrade}/> Rating: 
                            </Tag>
                            {props.course?.rating}/10
                        </ListItem>
                        <Divider/>
                        <ListItem mb='.5rem' mt='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                                <ListIcon as={MdSchool}/> School:
                            </Tag>
                            {props.school?.name}
                        </ListItem>
                        <Divider/>
                        <ListItem mb='.5rem' mt='.5rem' display='flex' justifyContent='space-between' alignItems='center'>
                            <Tag>
                                <ListIcon as={MdSquareFoot}/> Level:
                            </Tag>
                            {props.course?.level}
                        </ListItem>
                    </List>
                    <Divider mt='0.5rem' mb='0.5rem'/>
                    <Wrap>
                        {props.course?.keywords.map((v, i) => {
                            return <WrapItem key={i}>
                                        <Badge colorScheme="blue" variant='subtle'>
                                            {v}
                                        </Badge>
                                    </WrapItem>
                        })}
                    </Wrap>
                </CardBody>
            </Card>
        </Box>
    )
}