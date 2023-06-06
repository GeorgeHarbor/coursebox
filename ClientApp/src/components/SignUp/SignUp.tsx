import { Card, CardBody, CardFooter, CardHeader, Flex, Link, Image, Container, useColorModeValue, Text, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, useSteps, Button, FormLabel, Input, FormHelperText, FormControl, Divider, Code, Wrap, WrapItem, Avatar, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Slide, SlideDirection} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { SignUpAccount } from "./Account/SignUpAccount";
import { SignUpInterests } from "./Interests/SignUpInterests";
import { SignUpPersonal } from "./Personal/SignUpPersonal";
import validateEmail from "../../util/emailValidation";
import { SignUpLogin } from "./Login/SignUpLogin";

export const SignUp = () => {
    const { login } = useParams();

    const steps = [
        { title: 'Account', description: 'Account details' },
        { title: 'Personal', description: 'Your information' },
        { title: 'Interests', description: 'Pick what you like' },
      ]
    
    const [loginValues, setLoginValues] = useState({
        username: "",
        password: ""
    });
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const { isOpen: slideOpen, onToggle: slideToggle } = useDisclosure({defaultIsOpen: true});

    const [hasPrevious, setHasPrevious] = useState(false);
    const [atFinish, setAtFinish] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    
    const [uploadAvatar, setUploadAvatar] = useState({preview: null});
    
    let slideDirection = "left";

    const [account, setAccount] = useState<UserAccount>({
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

    const [errorMessages, setErrorMessages] = useState<UserAccount>({
        avatar: null,
        username: "",
        email: "",
        password: "",
        confirm: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
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

            if(!verifyStepData(activeStep))
                return;

            slideDirection = "right";
            slideToggle();
            // Only completes in next cycle or something?
            setActiveStep(activeStep + 1);

            setHasPrevious(true);
            setCurrentStep(activeStep + 1);

            if(activeStep + 1 === steps.length)
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
    function verifyStepData(step: number): boolean{
        let noError = true;
        const newErrorMessage = {...errorMessages};
        console.log(errorMessages, step);
        if(step === 1){
            console.log(account);
            if(account.username.length < 2 || account.username.length > 20){
                newErrorMessage.username = "The username needs to be between 2 and 20 characters.";
                noError = false;
            } else newErrorMessage.username = "";

            if(account.password.length < 8 || account.password.length > 32){
                newErrorMessage.password = "The password needs to be between 8 and 32 characters.";
                noError = false;
            } else newErrorMessage.password = "";

            if(account.confirm.length < 8 || account.confirm.length > 32){
                newErrorMessage.confirm = "The password needs to be between 8 and 32 characters.";
                noError = false;
            } else newErrorMessage.confirm = "";

            if(account.confirm !== account.password){
                newErrorMessage.confirm = "The passwords need to match!";
                noError = false;
            } else newErrorMessage.confirm = "";

            setErrorMessages(newErrorMessage);
            return noError;

        } else if(step === 2){
            if(account.email.length === 0){
                newErrorMessage.email = "The username needs to be between 2 and 20 characters.";
                noError = false;
            } else newErrorMessage.email = "";

            if(!validateEmail(account.email)){
                newErrorMessage.email = "The e-mail address you entered is not valid.";
                noError = false;
            } else newErrorMessage.email = "";

            if(account.firstName.length === 0 || account.firstName.length > 64){
                newErrorMessage.firstName = "The first name needs to be between 1 and 64 characters.";
                noError = false;
            } else newErrorMessage.firstName = "";

            if(account.lastName.length === 0 || account.lastName.length > 64){
                newErrorMessage.lastName = "The last name needs to be between 1 and 64 characters.";
                noError = false;
            } else newErrorMessage.lastName = "";

            if(account.dateOfBirth === undefined || account.dateOfBirth === ''){
                newErrorMessage.dateOfBirth = "You need to set a date of birth!";
                noError = false;
            } else newErrorMessage.dateOfBirth = "";

            setErrorMessages(newErrorMessage);
            return noError;
        }

        return true;
    }
    return(
        <>
        <Box bgColor='gray.400' position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' display='flex' justifyContent={"center"} m={"0"} alignItems={"center"} minWidth='486px' width="100%" height="100%" style={{backgroundImage:'url(/assets/ripples.png)', backgroundBlendMode:'multiply'}}>
            <Card boxShadow='md' w={["100%", "90%", "33%"]} overflow='hidden'>
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
                        <Text fontSize="2xl" fontWeight="bold">{
                            (login === "login")?"Log In":"Create a new account"
                        }</Text>
                    </Flex>
                </CardHeader>
                <CardBody pt={"0"}>
                    <Container style={{marginBottom: '.75rem'}}  maxW='container.sm'>
                        {
                            (login === "login")?
                                <SignUpLogin loginValues={loginValues} setLoginValues={setLoginValues}/>
                            :<>
                                <Text fontSize='xs'>
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
                                    errorMessages={errorMessages}
                                />
                            :(currentStep === 2)?
                                <SignUpPersonal 
                                account={account}
                                setAccount={setAccount}
                                errorMessages={errorMessages}
                                />
                            : <SignUpInterests
                                account={account}
                                setAccount={setAccount}
                                errorMessages={errorMessages}
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
                            </>
                        }
                    </Container>
                    <Divider my=".5rem" p="0"/>
                </CardBody>
                <CardFooter justifyContent={'flex-end'} pt="0" columnGap='.5rem' alignItems='center'>
                    {
                        (login === "login")?
                        <>  
                            <Flex mr='auto'>
                                <Link as={RouterLink} to='/'>
                                    <Button variant='outline'>Back to home</Button>
                                </Link>
                            </Flex>
                            <Flex textAlign='right'>
                                <Text fontSize="xs"><Link as={RouterLink} to='/sign-up/' color="blue.500">Sign Up</Link><br/><Link as={RouterLink} to='/forgot-password/' color="blue.500">Forgot password?</Link></Text>
                            </Flex>
                            <Flex>
                                <Button variant="solid" colorScheme='green' onClick={handleNextStep}>
                                    Log In
                                </Button>
                            </Flex>
                        </>
                        :<>
                            <Flex mr='auto'>
                                <Link as={RouterLink} to='/'>
                                    <Button variant='outline'>Back to home</Button>
                                </Link>
                            </Flex>
                            <Flex textAlign='right'>
                                <Text fontSize="xs">Already have an account?<br/><Link as={RouterLink} to='/sign-up/login' color="blue.500">Log in!</Link></Text>
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
                        </>
                    }           
                    

                </CardFooter>
            </Card>
        </Box>
        </>
    );
}