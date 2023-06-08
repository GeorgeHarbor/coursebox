import { Box, Flex } from "@chakra-ui/react";
import { CourseHeader } from "../components/Course/CourseHeader";
import { CourseBody } from "../components/Course/CourseBody";
import { CourseDetails } from "../components/Course/CourseDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import responseToCourse from "../util/responseToCourse";
import responseToSchool from "../util/responseToSchool";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs){
    return new Promise((resolve, reject) => {
        axios.get(`https://localhost:7145/api/Courses/${params.courseId}`).then((responseCourse) => {
            axios.get(`https://localhost:7145/api/School/${responseCourse.data.school.Id}`).then((responseSchool) => {
                resolve([responseToCourse(responseCourse.data), responseToSchool(responseSchool.data)]);
            }).catch((error) => {
                console.error("Error while fetching school", error);
                resolve(null);
            });
        }).catch((error) => {
            console.error("Error while fetching course", error);
            resolve(null);
        });
    });
}
export const CoursePage = () => {

    const [ loadedCourse, loadedSchool ] = useLoaderData() as [Course, School];

    const [course, setCourse] = useState<Course>(loadedCourse);
    const [school, setSchool] = useState<School>(loadedSchool);

    console.log(course, school);
    return (
        <>
            <CourseHeader course={course} school={school}/>
            <Box px={["1%", "5%", "10%", "20%"]} py='3rem'>
                <Flex flexDirection={['column', 'column', 'column', 'column', 'row']} justifyContent='space-between' columnGap='1rem' rowGap='1rem'>
                    <CourseBody course={course}/>
                    <CourseDetails course={course} school={school}/>
                </Flex>
            </Box>
        </>
    );
}