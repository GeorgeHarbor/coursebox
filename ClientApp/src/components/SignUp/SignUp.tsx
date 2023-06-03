import { Card, CardBody, CardFooter, CardHeader, Flex, Link, Image, Container, useColorModeValue, Text, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, useSteps, Button, FormLabel, Input, FormHelperText, FormControl, Divider, Code, Wrap, WrapItem, Avatar} from "@chakra-ui/react";
import { useState } from "react";
import { MdUpload, MdUploadFile } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

export const SignUp = () => {
    const steps = [
        { title: 'Account', description: 'Account details' },
        { title: 'Personal', description: 'Your information' },
        { title: 'Interests', description: 'Pick what you like' },
      ]

    const [hasPrevious, setHasPrevious] = useState(false);
    const [atFinish, setAtFinish] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    
    const [account, setAccount] = useState<UserAccount | undefined>({
        avatar: null,
        username: "",
        email: "",
        password: "",
        confirm: "",
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        interests: []
    });

    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    function handleNextStep(){
        // Check if last step is completable
        if(activeStep + 1 > steps.length){
            // Finish login
        } else {
            // Only completes in next cycle or something?
            setActiveStep(activeStep + 1);

            setHasPrevious(true);
            setCurrentStep(activeStep + 1);
            if(activeStep + 1 == steps.length)
                setAtFinish(true);
        }
    }
    function handlePreviousStep(){
        // Do not let the index go out of bounds
        if(activeStep - 1 < 1)
            return;
        else {
            setActiveStep(activeStep - 1);
            setCurrentStep(activeStep - 1);

            setAtFinish(false);
            if(activeStep - 1 === 1)
                setHasPrevious(false);
            
            return;
        }
    }
    return(
        <Box display='flex' justifyContent={"center"} m={"0"} alignItems={"center"} minWidth='486px' width="100%" height="100%">
            <Card  w={["100%", "90%", "33%"]}>
                <CardHeader>
                    <Flex
                        align={'center'}
                        _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
                        flexGrow: 1,
                        mr: 8,
                        }}
                        _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
                        flexGrow: 1,
                        ml: 8,
                        }}>
                        {useColorModeValue(<Link as={RouterLink} to='/'><Image src="/coursebox_black.svg" h={8}></Image></Link>,<Link as={RouterLink} to='/'><Image src="/coursebox_white.svg" h={8}></Image></Link>)}
                    </Flex>
                    <Flex alignItems="center" mt='1rem'>
                        <Text fontSize="3xl" fontWeight="bold">Create a new account</Text>
                    </Flex>
                </CardHeader>
                <CardBody pt={"0"}>
                    <Container style={{marginBottom: '.75rem'}}>
                        <Text fontSize='xs' color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}>
                            Step {currentStep}
                        </Text>
                        <FormControl>
                            <FormLabel>Avatar</FormLabel>
                                <Flex w='100%' justifyContent='space-between' alignItems='center'>
                                    <Button variant='outline' size='sm'>Upload avatar  <MdUploadFile/></Button>
                                    <Avatar bg='blue.500' color='white' size='md' name="Course Box"/>
                                </Flex>
                                

                            <FormHelperText>Allowed file types are <Code>.jpg</Code> and <Code>.png</Code></FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                                <Input type='text' />
                            <FormHelperText>Your personal username</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                                <Input type='password' />
                            <FormHelperText>Make sure you choose something unique.</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Repeat password</FormLabel>
                                <Input type='password' />
                            <FormHelperText>Make sure the passwords match.</FormHelperText>
                        </FormControl>
                    </Container>
                    <Stepper index={activeStep}>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                <StepIndicator>
                                    <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <Box flexShrink='0'>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </Box>

                                <StepSeparator />
                                </Step>
                            ))}
                    </Stepper>
                    <Divider my=".5rem" p="0"/>
                </CardBody>
                <CardFooter justifyContent={'flex-end'} pt="0" columnGap='.5rem'>
                    <Flex textAlign='right'>
                        <Text fontSize="xs">Already have an account?<br/><Link color="blue.500">Log in!</Link></Text>
                    </Flex>
                    {
                        (hasPrevious)?
                        <Flex>
                            <Button variant="outline" onClick={handlePreviousStep}>
                                Previous Step
                            </Button>
                        </Flex>
                        :""
                    }
                    <Flex>
                        <Button variant="solid" colorScheme={(atFinish)?"green":"blue"} onClick={handleNextStep}>
                            {(atFinish)?"Create account":"Next step"}
                        </Button>
                    </Flex>

                </CardFooter>
            </Card>
        </Box>
    );
}