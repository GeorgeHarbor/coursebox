export default function responseToCourse(data: any): Course{
    return {
        id:data.id,
        name:data.name,
        description:data.description,
        duration:data.duration,
        image_link:data.image,
        instructors:data.instructors,
        keywords:data.keywords,
        rating:data.rating,
        school:data.school,
        level:data.level,
        link:data.link
    }
}