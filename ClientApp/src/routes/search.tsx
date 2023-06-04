import { Box } from "@chakra-ui/react"
import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"
import { Search } from "../components/Search/Search"

export const SearchPage = () => {

    return(
        <>
            <Navigation />
            <Box id="content">
                <Search />
            </Box>
            <Footer/>
        </>
    )
}