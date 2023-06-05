import { Flex, Heading, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { CourseCard } from "../CourseCard/CourseCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const SearchBody = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("query") ?? "");
    
    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setSearchQuery(event.target.value);
        return;
    }
    return(
        <Stack ml='5%' pt='1rem' width='75%' pr='5%' pb='5%'>
            <Heading>Search for a course</Heading>
            <InputGroup width='50%'>
                <Input placeholder='Find your course' variant='filled' value={searchQuery} onChange={handleQueryChange}/>
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