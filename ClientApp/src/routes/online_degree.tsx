import { Box } from '@chakra-ui/react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { OnlineDegree } from '../components/OnlineDegree/OnlineDegree'

export const OnlineDegreePage = () => (
    <>
        <Navigation />
        <Box id="content" pt="64px">
            <OnlineDegree />
        </Box>
        <Footer/>
    </>
)