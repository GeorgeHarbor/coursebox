import { Box } from "@chakra-ui/react"
import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"
import { DashboardNavigation } from "../components/Dashboard/DashboardNavigation"

export const DashboardPage = () => {
    return(
        <>
            <DashboardNavigation />
            <Outlet />
        </>
    )
}