import { Card, CardBody, CardFooter, CardHeader, Flex, Link, Image, Container, useColorModeValue, Text, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, useSteps, Button, FormLabel, Input, FormHelperText, FormControl, Divider, Code, Wrap, WrapItem, Avatar, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Slide, SlideDirection} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SignUpAccount } from "./Account/SignUpAccount";
import { SignUpInterests } from "./Interests/SignUpInterests";
import { SignUpPersonal } from "./Personal/SignUpPersonal";

export const SignUp = () => {
    const steps = [
        { title: 'Account', description: 'Account details' },
        { title: 'Personal', description: 'Your information' },
        { title: 'Interests', description: 'Pick what you like' },
      ]

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const { isOpen: slideOpen, onToggle: slideToggle } = useDisclosure({defaultIsOpen: true});

    const [hasPrevious, setHasPrevious] = useState(false);
    const [atFinish, setAtFinish] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    
    const [uploadAvatar, setUploadAvatar] = useState({preview: null});
    
    let slideDirection = "left";

    const [account, setAccount] = useState<UserAccount | undefined>({
        avatar: null,
        username: "",
        email: "",
        password: "",
        confirm: "",
        firstName: "",
        lastName: "",
        dateOfBirth: undefined,
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
            slideDirection = "right";
            slideToggle();
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

            slideDirection = "left";
            slideToggle();

            if(activeStep - 1 === 1)
                setHasPrevious(false);
            
            return;
        }
    }
    return(
        <>
        <Box display='flex' justifyContent={"center"} m={"0"} alignItems={"center"} minWidth='486px' width="100%" height="100%">
            <Card w={["100%", "90%", "33%"]} overflow='hidden'>
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
                    <Container style={{marginBottom: '.75rem'}}  maxW='container.sm'>
                        <Text fontSize='xs' color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}>
                            Step {currentStep}
                        </Text>
                        {
                            (currentStep === 1)?
                            // <Slide direction={slideDirection as SlideDirection} in={slideOpen} style={{zIndex: 10, position:'relative'}}>
                                <SignUpAccount 
                                    uploadAvatar={uploadAvatar}
                                    setUploadAvatar={setUploadAvatar}
                                    onClose={onClose}
                                    isOpen={isOpen}
                                    onOpen={onOpen}
                                    account={account}
                                    setAccount={setAccount}
                                />
                            :(currentStep === 2)?
                                <SignUpPersonal 
                                account={account}
                                setAccount={setAccount}
                                />
                            : <SignUpInterests
                                account={account}
                                setAccount={setAccount}
                            />
                        }
                        <Stepper index={activeStep} mt='1rem'>
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
                    </Container>
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
        </>
    );
}