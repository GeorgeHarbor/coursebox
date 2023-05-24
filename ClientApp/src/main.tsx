import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './routes/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  theme} from '@chakra-ui/react'
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

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
      <Navigation />
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
