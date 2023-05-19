import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spacer, Image, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, InputLeftElement} from '@chakra-ui/react';
import { MdExpandMore, MdSearch } from 'react-icons/md';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Navigation = () => (
    <Flex p="1rem" px="2rem" w="100%" alignItems="center" justifyContent="center" flexGrow="1" columnGap="1rem" 
    boxShadow="lg"
    backgroundColor="blue.500"
    position="fixed"
    zIndex="1000"
    >
        <Box> 
            <Image minWidth="196px" objectFit="contain" src="/coursebox_white.svg" alt="Coursebox Logo"/>
        </Box>
        <Box>
            <InputGroup minWidth="512px">
                <InputLeftElement>
                    <MdSearch />
                </InputLeftElement>
                <Input placeholder="What would you like to learn today?" size="md" variant='outline'
                    _placeholder={{color:"gray.50"}}
                />
                <InputRightElement width='4.5rem'>
                    <Button size="sm">Search</Button>
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
            <Button variant="ghost">
                Login
            </Button>
        </Box>
        <Box>
            <Button variant="solid">
                Sign Up
            </Button>
        </Box>
        <Box>
            <ColorModeSwitcher />
        </Box>
    </Flex>

  )