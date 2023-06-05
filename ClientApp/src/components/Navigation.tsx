import { useBreakpointValue, Link, Box, Button, Flex, Input, InputGroup, InputRightElement, Image, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, InputLeftElement, Slide, DarkMode} from '@chakra-ui/react';
import { MdExpandMore, MdMenu, MdSearch } from 'react-icons/md';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './Login';
import { useState } from 'react';

import { Link as RouterLink, createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export const Navigation = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("query") ?? "");
    const [isLoginVisible, setLoginState] = useState(false);
    const isFullNavbarVisible = useBreakpointValue({md: false, lg: true}, { ssr: false })
        
    function handleSearchQueryChange(event: React.ChangeEvent<HTMLInputElement>): void{
        setSearchQuery(event.target.value);
        return;
    }

    function handleSearchKeydown(event: React.KeyboardEvent<HTMLInputElement>):void{
        if(event.key === "Enter")
            sendToSearch();
        return;
    }

    function sendToSearch(): void{
        const searchParameters = createSearchParams({query: searchQuery});
        navigate({
            pathname:"/search",
            search: `?${searchParameters}`
        });
        return;
    }

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
                            <Flex alignItems="center" px={[".5rem", ".75rem", "1rem"]} columnGap={'.5rem'} width={"80%"}>
                            <DarkMode>
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
                                        <Input value={searchQuery} placeholder="Take a look at our courses!" size="md" variant='outline'
                                            _placeholder={{color:"gray.50"}} color='white' onChange={handleSearchQueryChange} onKeyDown={handleSearchKeydown}
                                        />
                                        <InputRightElement width='4.5rem' zIndex={1001}>
                                            <Button size="sm" color="whiteAlpha.800" onClick={sendToSearch}>Search</Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                </DarkMode>
                                <Box>
                                    <Menu>
                                        <DarkMode>
                                        <MenuButton variant="ghost" as={Button} rightIcon={<MdExpandMore/>} display="flex" alignItems="center">
                                            Categories
                                        </MenuButton>
                                        </DarkMode>
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
                                    <Menu>
                                        <DarkMode>
                                        <MenuButton variant="ghost" as={Button} rightIcon={<MdExpandMore/>} display="flex" alignItems="center">
                                            Schools
                                        </MenuButton>
                                        </DarkMode>
                                        <MenuList>
                                            <MenuItem>MIT OCW</MenuItem>
                                            <MenuItem>edX</MenuItem>
                                            <MenuItem>Coursera</MenuItem>
                                            <MenuItem>OpenLearn</MenuItem>
                                            <MenuItem>Codecademy</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Box>
                                <DarkMode>
                                <Box>
                                    <Link as={RouterLink} to="/about-us">
                                        <Button variant="ghost">
                                            About Us
                                        </Button>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link as={RouterLink} to="/contact">
                                        <Button variant="ghost">
                                            Contact
                                        </Button>
                                    </Link>
                                </Box>
                                </DarkMode>
                            </Flex>
                        <Flex alignItems="center" justifyContent="center" columnGap={'.5rem'}>
                            <DarkMode>
                                <Box>
                                    <Button variant="ghost" onClick={() => {setLoginState(!isLoginVisible)}}>
                                        Login
                                    </Button>
                                </Box>
                                <Box>
                                    <Link as={RouterLink} to='/sign-up' color="white">
                                        <Button>
                                            Sign Up
                                        </Button>
                                    </Link>
                                </Box>
                            </DarkMode>
                            <Box>
                                <ColorModeSwitcher color='white'/>
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