import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Button, Code, Flex, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { MdUploadFile, MdWarning } from "react-icons/md";
import AvatarUpload from "react-avatar-edit"; 
import React from "react";

export const SignUpAccount = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef(null);

    function avatarOnClose(): void {
        props.setUploadAvatar({preview: null});

        return
    }
    
    function avatarOnCrop(preview: any): void {
        props.setUploadAvatar({ preview });

        return;
    }
    
    function avatarOnBeforeFileLoad(elem: any): void {
        if (elem.target.files[0].size > 2000000) {
            onOpen();
            elem.target.value = "";
        }

        return;
    }

    function acceptAvatar(): void{
        props.onClose();

        props.account.avatar = props.uploadAvatar.preview;
        props.setAccount(props.account);

        return;
    }

    function declineAvatar(): void{
        props.uploadAvatar.preview = null;
        props.onClose();

        return;
    }

    const handleChange = {
        "username": (event: React.ChangeEvent<HTMLInputElement>) => {
            const account = {...props.account};
            account.username = event.target.value;
            props.setAccount(account);
        },
        "password": (event: React.ChangeEvent<HTMLInputElement>) => {
            const account = {...props.account};
            account.password = event.target.value;
            props.setAccount(account);
        },
        "confirm": (event: React.ChangeEvent<HTMLInputElement>) => {
            const account = {...props.account};
            account.confirm = event.target.value;
            props.setAccount(account);
        },
    }
    return(
        <>
            <FormControl>
                <FormLabel>Avatar</FormLabel>
                    <Flex w='100%' justifyContent='space-between'>
                        <Button onClick={() => {
                            props.uploadAvatar.preview = null;
                            props.onOpen();
                        }} variant='outline' size='sm'>
                            Upload avatar  <MdUploadFile/>
                            </Button>
                        <Avatar bg='blue.500' color='white' size='md' name="Course Box" src={(props.uploadAvatar.preview != null)?props.uploadAvatar.preview:""}/>
                    </Flex>
                <FormHelperText mt='0.1rem' mb='0.5rem'>Allowed file types are <Code>.jpg</Code> and <Code>.png</Code></FormHelperText>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                    <Input type='text' value={props.account.username} onChange={handleChange['username']}/>
                <FormHelperText mt='0.1rem' mb='0.5rem'>Your personal username</FormHelperText>
            </FormControl>
            <Flex columnGap='1rem'>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                        <Input type='password' value={props.account.password} onChange={handleChange['password']}/>
                    <FormHelperText mt='0.1rem' mb='0.5rem'>Make sure you choose something unique.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Repeat password</FormLabel>
                        <Input type='password' value={props.account.confirm} onChange={handleChange['confirm']}/>
                    <FormHelperText mt='0.1rem' mb='0.5rem'>Make sure the passwords match.</FormHelperText>
                </FormControl>
            </Flex>
            <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size='xl'>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Select your picture</ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' justifyContent='center' alignItems='center'>
                <AvatarUpload
                    width={480}
                    height={295}
                    onCrop={avatarOnCrop}
                    onClose={avatarOnClose}
                    onBeforeFileLoad={avatarOnBeforeFileLoad}
                    labelStyle={{color:(useColorModeValue("blackAlpha.500", "whiteAlpha.500")), cursor:'pointer'}}
                />
                </ModalBody>
                <ModalFooter>
                    <Button variant='outline' mr={3} onClick={declineAvatar}>
                    Close
                    </Button>
                    {(props.uploadAvatar.preview != null)?
                        <Button colorScheme="green" onClick={acceptAvatar}>Accept avatar</Button>
                    :""}   
                </ModalFooter>
                </ModalContent>
            </Modal>
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                leastDestructiveRef={cancelRef}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold' display='flex' alignItems='center' columnGap='1rem'>
                        <MdWarning color='red'/> Cannot use this image!
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        The maximum file size for an image is 2MB. Please choose a different image.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} colorScheme="red" onClick={onClose} ml={3}>
                        I understand
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}