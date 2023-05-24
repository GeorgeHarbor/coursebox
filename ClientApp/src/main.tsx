import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './routes/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  theme} from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
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
