import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Partner from './Partner';

interface Props {
    partners: Array<Partner>;
}
export const Partners = (props: Props) => {
    return(
        <Box py="5rem" backgroundColor={useColorModeValue('gray.400', 'gray.900')}>
            <Stack mx={'10%'} display='flex' justifyContent='center' alignItems='center'>
            <Heading >Partnered with many learning platforms</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae efficitur sapien. Proin viverra suscipit finibus. Fusce ac consectetur nibh.</Text>
            <Box py="2rem" display='flex' flexDirection='row' columnGap='5rem' justifyContent='center' alignItems='center'>
                <Partner alt="Massachusetts Institute of Technology" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"/>
                <Partner alt="Massachusetts Institute of Technology" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"/>
                <Partner alt="Massachusetts Institute of Technology" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"/>
                <Partner alt="Massachusetts Institute of Technology" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"/>
                <Partner alt="Massachusetts Institute of Technology" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"/>
            </Box>
        </Stack>
        </Box>
    )
}