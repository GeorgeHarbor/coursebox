import { Box, Button, DarkMode, Link } from "@chakra-ui/react";
import { Link as RouterLink,  useLocation } from "react-router-dom";

export const DashboardNavigation = () => {
    const location = useLocation();
    return(
        <DarkMode>
            <Box bgColor='blue.600' px='1rem' height='32px' position='fixed' w='100%' zIndex='1001' boxShadow='sm'>
                <Link as={RouterLink} to='./'>
                    <Button variant={(location.pathname === '/dashboard/' || location.pathname === '/dashboard')?"solid":"ghost"} size='sm' borderRadius={0} color='white'>
                        MyCourses
                    </Button>
                </Link>
                <Link as={RouterLink} to='./online-degree'>
                    <Button variant={(location.pathname === '/dashboard/online-degree')?"solid":"ghost"} size='sm' borderRadius={0} color='white'>
                        Online Degree
                    </Button>
                </Link>
                <Link as={RouterLink} to='./settings'>
                    <Button variant={(location.pathname === '/dashboard/settings')?"solid":"ghost"} size='sm' borderRadius={0} color='white'>
                        Settings
                    </Button>
                </Link>
                <Link as={RouterLink} to='./control-panel'>
                    <Button variant={(location.pathname === '/dashboard/control-panel')?"solid":"ghost"} size='sm' borderRadius={0} color='white'>
                        Control Panel
                    </Button>
                </Link>
            </Box>
        </DarkMode>
    );
}