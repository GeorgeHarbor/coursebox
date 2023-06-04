// React
// ------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';

// Routes
// ------------------------------------------
import { Home } from './routes/home';
import { SignUpPage } from './routes/sign_up';
import { OnlineDegreePage } from './routes/online_degree';

// React router
// ------------------------------------------
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Chakra UI
// ------------------------------------------
import {
  ChakraProvider,
  theme} from '@chakra-ui/react'
import { CoursePage } from './routes/course';
import { SearchPage } from './routes/search';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/sign-up/:login?",
    element:<SignUpPage/>
  },
  {
    path:"/online-degree",
    element:<OnlineDegreePage/>
  },
  {
    path:"/course/:courseId?",
    element:<CoursePage/>
  },
  {
    path:"/search",
    element:<SearchPage />
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
