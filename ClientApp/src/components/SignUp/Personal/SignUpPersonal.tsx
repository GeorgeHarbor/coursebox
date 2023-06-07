import { FormControl, FormLabel, Input, FormHelperText, Flex, FormErrorMessage } from "@chakra-ui/react";

export const SignUpPersonal = (props: any) => {
    const handleChange = {
        "email": (event: React.ChangeEvent<HTMLInputElement>) => {
            const account = {...props.account};
            account.email = event.target.value;
            props.setAccount(account);
        },
        "first_name": (event: React.ChangeEvent<HTMLInputElement>) => {
            const account = {...props.account};
            account.firstName = event.target.value;
            props.setAccount(account);
        },
        "last_name": (event: React.ChangeEvent<HTMLInputElement>) => {
            const account = {...props.account};
            account.lastName = event.target.value;
            props.setAccount(account);
        },
        "dob": (event: React.ChangeEvent<HTMLInputElement>) => {
            const account = {...props.account};
            account.dateOfBirth = event.target.value;
            props.setAccount(account);
        },
    }
    return(<>
        <FormControl isRequired isInvalid={props.errorMessages.email.length !== 0}>
            <FormLabel>E-mail</FormLabel>
            <Input type='email' value={props.account.email} onChange={handleChange['email']}/>
            {
                (props.errorMessages.email.length === 0)?
                    <FormHelperText mt='0.1rem' mb='0.5rem'>We will never share this address with anyone</FormHelperText>
                :<FormErrorMessage mt='0.1rem' mb='0.5rem'>{props.errorMessages.email}</FormErrorMessage>
            }
        </FormControl>
        <Flex columnGap='1rem'>
            <FormControl isRequired isInvalid={props.errorMessages.firstName.length !== 0}>
                <FormLabel>First Name</FormLabel>
                <Input type='text' value={props.account.firstName} onChange={handleChange['first_name']}/>
                <FormErrorMessage mt='0.1rem' mb='0.5rem'>{props.errorMessages.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={props.errorMessages.lastName.length !== 0}>
                <FormLabel>Last Name</FormLabel>
                <Input type='text' value={props.account.lastName} onChange={handleChange['last_name']}/>
                <FormErrorMessage mt='0.1rem' mb='0.5rem'>{props.errorMessages.lastName}</FormErrorMessage>
            </FormControl>
        </Flex>
        <FormControl isRequired isInvalid={props.errorMessages.dateOfBirth.length !== 0 && props.errorMessages.dateOfBirth !== undefined}>
                <FormLabel>Date of Birth</FormLabel>
                <Input value={props.account.dateOfBirth} onChange={handleChange['dob']} type='date' max={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]}/>
                <FormErrorMessage mt='0.1rem' mb='0.5rem'>{props.errorMessages.dateOfBirth}</FormErrorMessage>
        </FormControl>
    </>);
}