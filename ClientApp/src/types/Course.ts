type Course = {
    id: string,
    name: string,
    description: string,
    duration: number,
    image_link: string,
    instructors: Array<string>,
    keywords: Array<string>,
    rating: number,
    school: School,
    level: string,
    link: string
}