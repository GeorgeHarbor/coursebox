import { useBreakpointValue, Link, Box, Button, Flex, Input, InputGroup, InputRightElement, Image, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, InputLeftElement, Slide, DarkMode} from '@chakra-ui/react';
import { MdExpandMore, MdMenu, MdSearch } from 'react-icons/md';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './Login';
import { useState } from 'react';

import { Link as RouterLink } from "react-router-dom";

export const Navigation = () => {
    const [isLoginVisible, setLoginState] = useState(false);

    const isFullNavbarVisible = useBreakpointValue({md: false, lg: true}, { ssr: false })

    return(
        <>
        <Slide in={isLoginVisible} style={{ zIndex: 10 }} unmountOnExit>
            <Login close={{do: setLoginState}}/>
        </Slide>
        <Flex p={[".2rem", ".5rem", "1rem"]} w="100%" alignItems="center" justifyContent="space-between" flexGrow="1" columnGap={"1rem"} 
        boxShadow="lg"
        backgroundColor="blue.500"
        position="fixed"
        zIndex="1000"

        height={["64px"]}
        >

                {(isFullNavbarVisible)?(
                    <>
                        <DarkMode>
                            <Flex alignItems="center" px={[".5rem", ".75rem", "1rem"]} columnGap={'.5rem'} width={"80%"}>
                                <Flex alignItems="center" justifyContent="center" height={["64px", "72px", "96px"]}>
                                    <Link as={RouterLink} to='/'>
                                        <Image height={["32px"]} src="/coursebox_white.svg" alt="Coursebox Logo"/>
                                    </Link>   
                                </Flex>
                                <Box width="40%">
                                    <InputGroup>
                                        <InputLeftElement color="whiteAlpha.800">
                                            <MdSearch />
                                        </InputLeftElement>
                                        <Input placeholder="Take a look at our courses!" size="md" variant='outline'
                                            _placeholder={{color:"gray.50"}}
                                        />
                                        <InputRightElement width='4.5rem' zIndex={1001}>
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
                            </Flex>
                        </DarkMode>
                        <Flex alignItems="center" justifyContent="center" columnGap={'.5rem'}>
                            <DarkMode>
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
                ):(
                    <>
                    <Flex alignItems="center" columnGap={'.5rem'} width="100%">
                        <DarkMode>
                            <Flex alignItems="center" columnGap={'.5rem'} width="100%">
                                <Flex alignItems="center" height={["64px", "72px", "96px"]}>
                                    <Link as={RouterLink} to='/'>
                                        <Image height={["32px"]} src="/coursebox_white.svg" alt="Coursebox Logo"/>
                                    </Link>   
                                </Flex>
                                <Box width="100%">
                                    <InputGroup>
                                        <InputLeftElement color="whiteAlpha.800">
                                            <MdSearch />
                                        </InputLeftElement>
                                        <Input placeholder="Take a look at our courses!" size="md" variant='outline'
                                            _placeholder={{color:"gray.50"}}
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button size="sm" color="whiteAlpha.800">Search</Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                            </Flex>
                        </DarkMode>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                            <Box>
                                <Button color="white" variant='ghost'>
                                    <MdMenu />
                                </Button>
                            </Box>
                        <Box>
                            <ColorModeSwitcher />
                        </Box>
                    </Flex>
                    </>
                )}
        </Flex>
    </>
    );
}