import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Stack, Checkbox, Flex, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box, Text, Button } from "@chakra-ui/react"

export const SearchFilters = () => {

    return(
        <Flex py='1rem' pl='5%' flexDirection='column' flexGrow='1'>
            <Text size='xl' pl='1rem' mb='1rem'>Filters</Text>
            <Accordion index={[0, 1, 2, 3, 4]} defaultIndex={[0, 1, 2, 3, 4]} allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Category
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack>
                        <Checkbox>Computer Science</Checkbox>
                        <Checkbox>Programming</Checkbox>
                        <Checkbox>Data Science</Checkbox>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    School
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack>
                        <Checkbox>Harvard</Checkbox>
                        <Checkbox>MIT</Checkbox>
                        <Checkbox>edX</Checkbox>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Difficulty
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack>
                        <Checkbox>Beginner</Checkbox>
                        <Checkbox>Intermediate</Checkbox>
                        <Checkbox>Expert</Checkbox>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Duration
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex columnGap='1rem'>
                        <Stack>
                            <Text>
                                From (days)
                            </Text>
                            <NumberInput size='md' maxW={24} allowMouseWheel>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Stack>
                        <Stack>
                            <Text>
                                To (days)
                            </Text>
                            <NumberInput size='md' maxW={24} allowMouseWheel>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Stack>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Rating
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Flex columnGap='1rem'>
                    <Stack>
                        <Text>
                            From
                        </Text>
                        <NumberInput size='md' maxW={24} allowMouseWheel>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Stack>
                    <Stack>
                        <Text>
                            To
                        </Text>
                        <NumberInput size='md' maxW={24} allowMouseWheel>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Stack>
                </Flex>
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
            <Button variant='outline' colorScheme='blue' size='sm' mt='1rem' alignSelf='flex-end'>Apply Filters</Button>
        </Flex>
    )
}