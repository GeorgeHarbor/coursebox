type SearchParameters = {
    category: Array<string>,
    school: Array<string>,
    difficulty: Array<string>,
    duration: {
        from: number,
        to: number,
    },
    rating: {
        from: number,
        to: number
    },
    query: string
}