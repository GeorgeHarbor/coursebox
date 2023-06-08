import { Badge, Box, Button, Card, CardBody, Flex, Heading, LightMode, Link, Stat, StatNumber, Tag, Text } from "@chakra-ui/react"
import { MdGrade, MdOpenInNew, MdSchool, MdSquareFoot, MdTimelapse } from "react-icons/md"

export const CourseHeader = (props: {course: Course | undefined, school: School | undefined}) => {
    return(
        <Box display='flex' justifyContent='center' alignItems='center' w='100%' minH='520px' bgColor='gray.500' backgroundSize='cover' backgroundPosition='center' backgroundBlendMode='opacity' backgroundImage={`url(${props.course?.image_link})`}>
            <LightMode>
                <Card w={["100%", '60%', '50%', '40%']} bgColor='whiteAlpha.700' p='1rem'>
                    <CardBody display='flex' flexDirection='column'>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Heading as='h1' size='2xl'>{props.course?.name}</Heading>
                            <Stat textAlign='right' flexGrow='0'>
                                <StatNumber>
                                    <Badge fontSize='1.3rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> {props.course?.rating}/10</Badge>
                                </StatNumber>
                            </Stat>
                        </Box>
                        <Box mb='1rem'>
                            <Heading as='h2' size='md' color='gray.700' pt='0'>{ props.course?.keywords[0] }</Heading>
                        </Box>
                        <Box display='flex' columnGap='1rem' mb='1rem'>
                            <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>{props.school?.name}</Flex></Tag>
                            <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{((props.course?.duration ?? 24) / 24)} day(s)</Flex></Tag>
                            <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>{props.course?.level}</Flex></Tag>
                        </Box>
                        <Box display='flex' alignItems='center' columnGap='1rem'>
                            <Text fontWeight='bold'>Lectures by: </Text> 
                            {props.course?.instructors.map((v) => {
                                return v + "; "
                            })}
                        </Box>
                        <Link alignSelf='flex-end' href={props.course?.link} isExternal>
                            <Button colorScheme="green">Course website <MdOpenInNew /> </Button>
                        </Link>
                    </CardBody>
                </Card>
            </LightMode>
        </Box>
)
}