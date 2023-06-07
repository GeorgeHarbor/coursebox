import { Flex } from "@chakra-ui/react"
import { SearchFilters } from "./SearchFilters"
import { SearchBody } from "./SearchBody"

export const Search = () => {
    return(
        <Flex>
            <SearchFilters />
            <SearchBody />
        </Flex>
    )
}