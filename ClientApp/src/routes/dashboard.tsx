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