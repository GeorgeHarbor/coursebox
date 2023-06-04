import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

export const SignUpLogin = (props: any) => {
    const [show, setShow] = useState(false);
    const handleClickShow = () => setShow(!show);

    const handleChange = {
        "username":(event: React.ChangeEvent<HTMLInputElement>):void => {
            const newLoginValues = {...props.loginValues};
            newLoginValues.username = event.target.value;
            props.setLoginValues(newLoginValues);
            return;
        },
        "password":(event: React.ChangeEvent<HTMLInputElement>): void => {
            const newLoginValues = {...props.loginValues};
            newLoginValues.password = event.target.value;
            props.setLoginValues(newLoginValues);
            return;
        }
    }
    return(
        <>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type='text' value={props.loginValues.username} onChange={handleChange['username']}/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} value={props.loginValues.password} onChange={handleChange['password']}/>
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                        {show ?<MdVisibilityOff/>:<MdVisibility/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    )
}