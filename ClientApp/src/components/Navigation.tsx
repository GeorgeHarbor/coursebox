import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spacer, Image, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, InputLeftElement, Slide, useDisclosure, DarkMode} from '@chakra-ui/react';
import { MdExpandMore, MdSearch } from 'react-icons/md';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './Login';
import { useState } from 'react';

export const Navigation = () => {
    const [isLoginVisible, setLoginState] = useState(false);
    return(
        <>
        <Slide in={isLoginVisible} style={{ zIndex: 10 }} unmountOnExit>
            <Login close={{do: setLoginState}}/>
        </Slide>
        <Flex p="1rem" px="2rem" w="100%" alignItems="center" justifyContent="center" flexGrow="1" columnGap="1rem" 
        boxShadow="lg"
        backgroundColor="blue.500"
        position="fixed"
        zIndex="1000"
        >
            <DarkMode>
                <Box> 
                    <Image minWidth="196px" objectFit="contain" src="/coursebox_white.svg" alt="Coursebox Logo"/>
                </Box>
                <Box>
                    <InputGroup minWidth="512px">
                        <InputLeftElement color="whiteAlpha.800">
                            <MdSearch />
                        </InputLeftElement>
                        <Input placeholder="What would you like to learn today?" size="md" variant='outline'
                            _placeholder={{color:"gray.50"}}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button size="sm" color="whiteAlpha.800">Search</Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton variant="ghost" as={Button} rightIcon={<MdExpandMore/>} display="flex" alignItems="center">
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuGroup title="Programming">
                                <MenuItem>C Basics 101</MenuItem>
                                <MenuItem>Web Programming</MenuItem>
                                <MenuItem>Python 101</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Computer Science">
                                <MenuItem>Computer Memory</MenuItem>
                                <MenuItem>Computer Processors</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Button variant="ghost">
                        FAQ
                    </Button>
                </Box>
                <Box>
                    <Button variant="ghost">
                        About Us
                    </Button>
                </Box>
                <Box>
                    <Button variant="ghost">
                        Contact
                    </Button>
                </Box>
                <Spacer />
                <Box>
                    <Button variant="ghost" onClick={() => {setLoginState(!isLoginVisible)}}>
                        Login
                    </Button>
                </Box>
                <Box>
                    <Button color="white">
                        Sign Up
                    </Button>
                </Box>
            </DarkMode>
            <Box>
                <ColorModeSwitcher />
            </Box>
        </Flex>
    </>
    );
}