import { Card, CardBody, Flex, Heading, Input, InputGroup, InputRightElement, Stack, Image, Text, Badge, Stat, StatNumber, Tag, Link } from "@chakra-ui/react";
import { MdGrade, MdSchool, MdSearch, MdSquareFoot, MdTimelapse } from "react-icons/md";
import { Link as RouterLink } from 'react-router-dom';

export const SearchBody = () => {

    return(
        <Stack ml='5%' pt='1rem' width='75%' pr='5%' pb='5%'>
            <Heading>Search for a course</Heading>
            <InputGroup width='50%'>
                <Input placeholder='Basic usage' variant='filled' />
                <InputRightElement>
                    <MdSearch/>
                </InputRightElement>
            </InputGroup>
            <Flex gap='1rem' flexWrap='wrap'>
                <Link as={RouterLink} to='/course'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                            src='https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png'
                            alt='Exploring GraphQL: A Query Language for APIs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Flex>
                                <Heading size='md'>Exploring GraphQL: A Query Language for APIs</Heading>
                                <Stat textAlign='right' flexGrow='0'>
                                    <StatNumber>
                                        <Badge fontSize='1rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> 9.5/10</Badge>
                                    </StatNumber>
                                </Stat>
                            </Flex>
                            <Flex columnGap='.5rem'>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>edX</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{300/24} days</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>Beginner</Flex></Tag>
                            </Flex>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus, ipsum eu lobortis malesuada, nulla ante viverra augu...
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Link>
                <Link as={RouterLink} to='/course'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                            src='https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png'
                            alt='Exploring GraphQL: A Query Language for APIs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Flex>
                                <Heading size='md'>Exploring GraphQL: A Query Language for APIs</Heading>
                                <Stat textAlign='right' flexGrow='0'>
                                    <StatNumber>
                                        <Badge fontSize='1rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> 9.5/10</Badge>
                                    </StatNumber>
                                </Stat>
                            </Flex>
                            <Flex columnGap='.5rem'>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>edX</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{300/24} days</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>Beginner</Flex></Tag>
                            </Flex>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus, ipsum eu lobortis malesuada, nulla ante viverra augu...
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Link>
                <Link as={RouterLink} to='/course'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                            src='https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png'
                            alt='Exploring GraphQL: A Query Language for APIs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Flex>
                                <Heading size='md'>Exploring GraphQL: A Query Language for APIs</Heading>
                                <Stat textAlign='right' flexGrow='0'>
                                    <StatNumber>
                                        <Badge fontSize='1rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> 9.5/10</Badge>
                                    </StatNumber>
                                </Stat>
                            </Flex>
                            <Flex columnGap='.5rem'>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>edX</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{300/24} days</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>Beginner</Flex></Tag>
                            </Flex>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus, ipsum eu lobortis malesuada, nulla ante viverra augu...
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Link>
                <Link as={RouterLink} to='/course'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                            src='https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png'
                            alt='Exploring GraphQL: A Query Language for APIs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Flex>
                                <Heading size='md'>Exploring GraphQL: A Query Language for APIs</Heading>
                                <Stat textAlign='right' flexGrow='0'>
                                    <StatNumber>
                                        <Badge fontSize='1rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> 9.5/10</Badge>
                                    </StatNumber>
                                </Stat>
                            </Flex>
                            <Flex columnGap='.5rem'>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>edX</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{300/24} days</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>Beginner</Flex></Tag>
                            </Flex>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus, ipsum eu lobortis malesuada, nulla ante viverra augu...
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Link>
                <Link as={RouterLink} to='/course'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                            src='https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png'
                            alt='Exploring GraphQL: A Query Language for APIs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Flex>
                                <Heading size='md'>Exploring GraphQL: A Query Language for APIs</Heading>
                                <Stat textAlign='right' flexGrow='0'>
                                    <StatNumber>
                                        <Badge fontSize='1rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> 9.5/10</Badge>
                                    </StatNumber>
                                </Stat>
                            </Flex>
                            <Flex columnGap='.5rem'>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>edX</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{300/24} days</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>Beginner</Flex></Tag>
                            </Flex>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus, ipsum eu lobortis malesuada, nulla ante viverra augu...
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Link>
                <Link as={RouterLink} to='/course'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                            src='https://prod-discovery.edx-cdn.org/media/course/image/6f9e9524-61ec-4b7a-a02a-6708cab268b9-cd9b2f49ed7b.small.png'
                            alt='Exploring GraphQL: A Query Language for APIs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Flex>
                                <Heading size='md'>Exploring GraphQL: A Query Language for APIs</Heading>
                                <Stat textAlign='right' flexGrow='0'>
                                    <StatNumber>
                                        <Badge fontSize='1rem' variant='solid' colorScheme="yellow" display='flex' alignItems='center'><MdGrade/> 9.5/10</Badge>
                                    </StatNumber>
                                </Stat>
                            </Flex>
                            <Flex columnGap='.5rem'>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSchool/>edX</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdTimelapse />{300/24} days</Flex></Tag>
                                <Tag><Flex justifyContent='center' alignItems='center' columnGap='1rem'><MdSquareFoot/>Beginner</Flex></Tag>
                            </Flex>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus, ipsum eu lobortis malesuada, nulla ante viverra augu...
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Link>
            </Flex>
        </Stack>
    );
}