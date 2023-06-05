import { Card, CardBody, Flex, Heading, Input, InputGroup, InputRightElement, Stack, Image, Text, Badge, Stat, StatNumber, Tag, Link } from "@chakra-ui/react";
import { MdGrade, MdSchool, MdSearch, MdSquareFoot, MdTimelapse } from "react-icons/md";
import { Link as RouterLink } from 'react-router-dom';
import { CourseCard } from "../CourseCard/CourseCard";

export const SearchBody = () => {

    return(
        <Stack ml='5%' pt='1rem' width='75%' pr='5%' pb='5%'>
            <Heading>Search for a course</Heading>
            <InputGroup width='50%'>
                <Input placeholder='Find your course' variant='filled' />
                <InputRightElement>
                    <MdSearch/>
                </InputRightElement>
            </InputGroup>
            <Flex gap='1rem' flexWrap='wrap'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </Flex>
        </Stack>
    );
}