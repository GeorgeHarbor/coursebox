// React
// ------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';

// Routes
// ------------------------------------------
import {Home} from './routes/home';
import { SignUpPage } from './routes/sign_up';

// React router
// ------------------------------------------
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Chakra UI
// ------------------------------------------
import {
  ChakraProvider,
  Box,
  theme} from '@chakra-ui/react'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/sign-up",
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
