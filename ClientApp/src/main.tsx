// React
// ------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';

// Routes
// ------------------------------------------
import { Home } from './routes/home';
import { SignUpPage } from './routes/sign_up';
import { CoursePage, loader as courseLoader } from './routes/course';
import { SearchPage } from './routes/search';
import { DashboardPage } from './routes/dashboard';
import { MyCourses } from './components/Dashboard/MyCourses/MyCourses';
import { Settings } from './components/Dashboard/Settings/Settings';
import { ControlPanel } from './components/Dashboard/ControlPanel/ControlPanel';
import { OnlineDegree } from './components/OnlineDegree/OnlineDegree';

// React router
// ------------------------------------------
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Chakra UI
// ------------------------------------------
import {
  ChakraProvider,
  theme} from '@chakra-ui/react'
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Index, loader as indexLoader } from './components/Index/Index';
import { Contact } from './components/Contact/Contact';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement: <ErrorPage/>,

    children:[
      {
        index: true,
        element:<Index />,
        loader: indexLoader
      },
      {
        path:"/course/:courseId",
        element:<CoursePage/>,
        loader: courseLoader
      },
      {
        path:"/search",
        element:<SearchPage />
      },
      {
        path:"/dashboard",
        element:<DashboardPage/>,
        children: [
          {
            index: true,
            element:<MyCourses />
          },
          {
            path:"online-degree",
            element:<OnlineDegree />
          },
          {
            path:"settings",
            element: <Settings />
          },
          {
            path:"control-panel",
            element: <ControlPanel />
          }
        ]
      },
      {
        path:"/contact",
        element: <Contact/>
      }
    ]
  },
  {
    path:"/sign-up/:login?",
    element:<SignUpPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
