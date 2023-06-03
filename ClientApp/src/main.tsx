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


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/sign-up",
    element:<SignUpPage/>
  },
  {
    path:"/online-degree",
    element:<OnlineDegreePage/>
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
