import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    Box,
    Flex,
    Link
  } from '@chakra-ui/react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface Props {
  close: {
      do: any
  }
}

export default function Login(props: Props, ) {
    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show);
  return (
    <>
      <Drawer
        isOpen={true}
        placement='right'
        onClose={handleClickShow}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => {props.close.do(false)}}/>
          <DrawerHeader>Login to Coursebox</DrawerHeader>
          <DrawerBody>
            <Stack>
                <Box>
                    <Text>Username / E-mail</Text>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type='text'
                            placeholder='Username'
                        />
                    </InputGroup>
                </Box>
                <Box>
                    <Text>Password</Text>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                            {show ?<MdVisibilityOff/>:<MdVisibility/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box w='100%'>
                    <Flex alignItems={'center'} columnGap={'.5rem'} w='100%'>
                        <Box alignSelf={'flex-start'}>
                            <Link>
                                <Text fontSize='xs'>
                                    Sign up
                                </Text>
                            </Link>
                            <Link>
                            <Text fontSize='xs'>
                                    Forgot Password?
                                </Text>
                            </Link>
                        </Box>
                        <Button colorScheme='green' ml='auto'>Login</Button>
                    </Flex>
                    
                </Box>
            </Stack>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={() => {props.close.do(false)}}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


