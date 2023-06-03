type UserAccount = {
    avatar: File | null,
    username: string,
    email: string,
    password: string,
    confirm: string,

    firstName: string,
    lastName: string,
    dateOfBirth: Date | null,

    interests: Array<string>
}