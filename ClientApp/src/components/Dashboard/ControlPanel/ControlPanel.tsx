import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Image, Divider, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, Stack, StackDivider, Text, FormControl, FormHelperText, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Textarea, Kbd } from "@chakra-ui/react";
import { MdDelete, MdEdit, MdUpdate } from "react-icons/md";

export const ControlPanel = () => {
    return(
        <Box px='8%' py='4rem'>
            <Heading as='h1' size='xl'>
                Control Panel
            </Heading>
            <Divider/>
            <Flex mt='1rem' justifyContent='space-around' columnGap='5%'>
                <Stack flexGrow='1'>
                    <Heading as='h2' size='lg'>Course List</Heading>
                    <Card>
                        <CardHeader p='1rem'>
                            <InputGroup>
                                <Input placeholder='Course name'/>
                                <InputRightElement w='5rem'>
                                    <Button size='sm' h='1.75rem'>Search</Button>
                                </InputRightElement>
                            </InputGroup>
                        </CardHeader>
                        <Divider/>
                        <CardBody p={0}>
                            <Stack p={0}>
                                <Flex _hover={{backgroundColor:"gray.800", cursor: "pointer"}} p=".75rem" justifyContent='space-between' columnGap='1rem' alignItems='center'>
                                    <Text>Exploring GraphQL: A Query Language for APIs</Text>
                                    <Flex columnGap='.5rem'>
                                        <IconButton size='sm' colorScheme='yellow' variant='outline' icon={<MdEdit />} aria-label="Edit course" />
                                        <IconButton size='sm' colorScheme="red" variant='outline' icon={<MdDelete />} aria-label="Delete course" />
                                    </Flex>
                                </Flex>
                                <StackDivider />
                                <Flex _hover={{backgroundColor:"gray.800", cursor: "pointer"}} justifyContent='space-between' p=".75rem" columnGap='1rem' alignItems='center'>
                                    <Text>Exploring GraphQL: A Query Language for APIs</Text>
                                    <Flex columnGap='.5rem'>
                                        <IconButton size='sm' colorScheme='yellow' variant='outline' icon={<MdEdit />} aria-label="Edit course" />
                                        <IconButton size='sm' colorScheme="red" variant='outline' icon={<MdDelete />} aria-label="Delete course" />
                                    </Flex>
                                </Flex>
                                <StackDivider />
                                <Flex _hover={{backgroundColor:"gray.800", cursor: "pointer"}} justifyContent='space-between' p=".75rem" columnGap='1rem' alignItems='center'>
                                    <Text>Exploring GraphQL: A Query Language for APIs</Text>
                                    <Flex columnGap='.5rem'>
                                        <IconButton size='sm' colorScheme='yellow' variant='outline' icon={<MdEdit />} aria-label="Edit course" />
                                        <IconButton size='sm' colorScheme="red" variant='outline' icon={<MdDelete />} aria-label="Delete course" />
                                    </Flex>
                                </Flex>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Flex justifyContent='space-between' w='100%'>
                                <ButtonGroup size='sm' isAttached variant='outline'>
                                    <Button colorScheme="blue" variant='solid'>
                                        1
                                    </Button>
                                    <Button>
                                        2
                                    </Button>
                                    <Button>
                                        3
                                    </Button>
                                </ButtonGroup>
                                <Box>
                                    <Button colorScheme="green" size='sm'>New Course</Button>
                                </Box>
                            </Flex>

                        </CardFooter>
                    </Card>
                </Stack>
                <Stack flexGrow='4'>
                    <Heading as='h2' size='lg'>Selected Course</Heading>
                        <Image borderRadius='lg' src='https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png'></Image>
                        <FormControl>
                            <FormLabel>Course Name</FormLabel>
                            <Input size='sm' type='text' value="Exploring GraphQL: A Query Language for APIs"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea size='sm' value='If you are a programmer, this course will help you gain the skills you need to get started using GraphQL for a small project or professionally in production. You’ll feel comfortable getting started with the right tools for your use case. If you are nontechnical, this course will help you communicate with developers and participate in conversations about GraphQL. You will understand when and why to use GraphQL for a project. Start your GraphQL journey today!' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>School</FormLabel>
                            <Select placeholder='Select difficulty' size='sm'>
                                <option value='Beginner'>MIT OCW</option>
                                <option value='Intermediate'>edX</option>
                                <option value='Expert'>Coursera</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Link</FormLabel>
                            <Input size='sm' type='url' value="https://www.edx.org/course/exploring-graphql-a-query-language-for-apis"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Rating</FormLabel>
                            <NumberInput value={10} min={1} max={10} size='sm' step={0.1}>
                            <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Duration (hours)</FormLabel>
                            <NumberInput value={10} min={0} size='sm' step={0.1}>
                            <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Difficulty</FormLabel>
                            <Select placeholder='Select difficulty' size='sm'>
                                <option value='Beginner'>Beginner</option>
                                <option value='Intermediate'>Intermediate</option>
                                <option value='Expert'>Expert</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Instructors</FormLabel>
                            <Input value='Prof. Rohit Ravikoti' size='sm' />
                            <FormHelperText>Separate instructors by <Kbd>,</Kbd> symbol</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Keywords</FormLabel>
                            <Input value='Query languages,Software Engineering,Front End Design,GraphQL,Application programming interface (api)' size='sm' />
                            <FormHelperText>Separate keywords by <Kbd>,</Kbd> symbol</FormHelperText>
                        </FormControl>
                        <Flex alignSelf='flex-end' columnGap='1rem'>
                            <Button colorScheme="green"><MdUpdate/> Update</Button>
                            <Button colorScheme="red"><MdDelete/> Delete</Button>
                        </Flex>
                </Stack>
            </Flex>
        </Box>

        );
}