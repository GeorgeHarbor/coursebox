import { Box, Button, Card, CardBody, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';

interface Props {
    
}
 
const CallToAction = (props: Props) => {
        return (
            <Box py="5rem" bg={useColorModeValue('gray.100', 'gray.700')}>
                <Box mx="10%" display='flex' justifyContent='space-around' columnGap='2rem'>
                    <Card 
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='elevated'
                    bg={useColorModeValue('gray.200', 'gray.800')}
                    p='0rem'>
                    <Image  maxWidth="50%" objectFit='cover' src="https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL365_Free_Certs_Blog_Header.png" alt="Man studying online courses"></Image>
                        <CardBody display='flex' justifyContent='center' alignItems='center'>
                            <Stack>
                                <Heading>
                                    Start learning today
                                </Heading>
                                <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum vulputate massa, ut egestas erat iaculis tempus. Donec pharetra vulputate molestie. 
                                </Text>
                                <Button colorScheme='green' size='lg' alignSelf='flex-end'>
                                    Sign up for free
                                </Button>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
            
        );
}
 
export default CallToAction;