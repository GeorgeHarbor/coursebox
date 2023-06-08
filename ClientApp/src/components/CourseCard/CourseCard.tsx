import { Card, CardBody, Stack, Flex, Heading, Stat, StatNumber, Badge, Tag, Link, Image, Text } from "@chakra-ui/react";
import { MdGrade, MdSchool, MdTimelapse, MdSquareFoot } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import truncateString from "../../util/truncateString";

export const CourseCard = (props: {course: Course | undefined, school: School | undefined}) => {
    return(
        <Link as={RouterLink} to='/course'>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={props.course?.image_link}
                    alt={props.course?.name}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Flex>
                        <Heading size='md'>{props.course?.name}</Heading>
                        <Stat textAlign='right' flexGrow='0'>
                            <StatNumber>
                                <Badge fontSize='1rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> {props.course?.rating}/10</Badge>
                            </StatNumber>
                        </Stat>
                    </Flex>
                    <Flex columnGap='.5rem'>
                        <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>{props.school?.name}</Flex></Tag>
                        <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{props.course?.duration ?? 24/24} days</Flex></Tag>
                        <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>{props.course?.level}</Flex></Tag>
                    </Flex>
                    <Text>
                        {truncateString(props.course?.description ?? "", 100)}
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
}