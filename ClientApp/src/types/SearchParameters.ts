type SearchParameters = {
    category: Array<{id: string, name: string}>,
    school: Array<{id: string, name: string}>,
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