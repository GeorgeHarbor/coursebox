import { Box } from '@chakra-ui/react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { Outlet, useNavigation } from 'react-router-dom'

export const Home = () => {
  const navigation = useNavigation();

  return(
    <>
    <Navigation />
      <Box id="content" className={navigation.state === "loading"? "loading":""}>
        <Outlet />
      </Box>
    <Footer/>
    </>
  )
}
