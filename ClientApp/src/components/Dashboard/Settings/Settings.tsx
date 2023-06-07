import { Avatar, Box, Button, Divider, Editable, EditableInput, EditablePreview, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";

export const Settings = () => {
    return(
        <Box px='8%' py='4rem'>
            <Heading as='h1' size='xl'>
                Settings
            </Heading>
            <Divider/>
            <Stack w={["100%", "75%", "50%"]} mt='1rem'>
                <Flex alignItems='center' columnGap='1rem'>
                    <Avatar name="John Doe"/>
                    <Text  fontSize='xl'>Username</Text>
                </Flex>
                <Divider/>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Editable defaultValue='address@email.com'>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <Divider/>
                <Flex columnGap='1rem'>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Editable defaultValue='John'>
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Editable defaultValue='Doe'>
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                    </FormControl>
                </Flex>
                <FormControl>
                    <FormLabel>Date of Birth</FormLabel>
                    <Input type='date' value={Date.now()}/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <Button alignSelf='flex-end' colorScheme='green'>Update settings</Button>
            </Stack>
        </Box>
    );
}