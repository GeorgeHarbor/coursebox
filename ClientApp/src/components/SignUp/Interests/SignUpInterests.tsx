import { Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { useState } from "react";

export const SignUpInterests = (props: any) => {
    const [inputValue, setInputValue] = useState("");

    function updateInputValue(event: React.ChangeEvent<HTMLInputElement>): void{
        setInputValue(event.target.value);
        return;
    }

    function handleAddInterest(): void{
        const account = {...props.account};
        account.interests.push(inputValue);
        props.setAccount(account);

        setInputValue("");
        return;
    }

    function handleRemoveInterest(index: number): void{
        const account = {...props.account};
        account.interests.splice(index, 1);

        props.setAccount(account);
        return;
    }
    return(<>
        <FormControl>
            <FormLabel>Interests</FormLabel>
            <InputGroup>
                <Input value={inputValue} onChange={event => updateInputValue(event)} type='text' placeholder='E.g. Computer science'/>
                <InputRightElement width='7rem'>
                    <Button onClick={handleAddInterest} colorScheme='green' variant='outline' size='sm'>Add interest</Button>
                </InputRightElement>
            </InputGroup>
            </FormControl>
            <FormControl>
                <Flex mt="1rem" columnGap='.5rem'>
                    {
                        props.account.interests.map((interest: string, index: number) => (
                            <Tag
                                size='md'
                                key={index}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='green'
                            >
                            <TagLabel>{interest}</TagLabel>
                            <TagCloseButton onClick={() => { handleRemoveInterest(index) }}/>
                        </Tag>
                        ))
                    }
                </Flex>
            </FormControl>
    </>);
}