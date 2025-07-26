import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Appetizers from './Components/Appetizers/Appetizers.jsx';
import Desserts from './Components/Desserts/Desserts.jsx';
import Specials from './Components/Specials/Specials.jsx';
import Layout from './Components/Layout/Layout.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true, // This makes Home the default route
        loader: async () => {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          const data = await response.json();
          return data.categories;
        },
        element: <Home />,
      },
      {
        path: 'appetizers',
        loader: async () => {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter');
          const data = await response.json();
          return data.meals;
        },
        element: <Appetizers />,
      },
      {
        path: 'desserts',
        loader: async () => {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
          const data = await response.json();
          return data.meals;
        },
        element: <Desserts />,
      },
      {
        path: 'specials',
        loader: async () => {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
          const data = await response.json();
          return data.meals;
        },
        element: <Specials />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
