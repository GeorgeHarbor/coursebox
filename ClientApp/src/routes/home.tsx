import { Box } from '@chakra-ui/react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const Home = () => (
  <>
    <Navigation />
      <Box id="content">
        <Outlet />
      </Box>
    <Footer/>
    </>
)
