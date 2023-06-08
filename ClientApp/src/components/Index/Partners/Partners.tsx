import { Box, Heading, Stack, Text, useColorModeValue, Image } from '@chakra-ui/react';

export const Partners = (props: {schools: Array<School>}) => {
    return(
        <Box py="5rem" backgroundColor={useColorModeValue('gray.400', 'gray.900')}>
            <Stack mx={'10%'} display='flex' justifyContent='center' alignItems='center'>
            <Heading >Partnered with many learning platforms</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae efficitur sapien. Proin viverra suscipit finibus. Fusce ac consectetur nibh.</Text>
            <Box py="2rem" display='flex' flexDirection='row' columnGap='5rem' justifyContent='center' alignItems='center'>
                {props.schools.map((v, i) => {
                    return <Image key={i} maxWidth='10%' src={v.imageLink} alt={v.name}></Image>
                })}
            </Box>
        </Stack>
        </Box>
    )
}