export default function responseToSchool(data: any): School{
    return {
        courses: data.courses,
        description: data.description,
        image_link: data.image_link,
        name: data.name
    }
}