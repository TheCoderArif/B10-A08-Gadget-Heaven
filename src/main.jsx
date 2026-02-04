import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import AllProducts from './components/CategoryList/AllProducts/AllProducts.jsx'
import Laptops from './components/CategoryList/Laptops/Laptops.jsx'
import Phones from './components/CategoryList/Phones/Phones.jsx'
import Accessories from './components/CategoryList/Accessories/Accessories.jsx'
import SmartWatches from './components/CategoryList/SmartWatches/SmartWatches.jsx'
import Macbooks from './components/CategoryList/Macbooks/Macbooks.jsx'
import Iphones from './components/CategoryList/Iphones/Iphones.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Cart from './components/Cart/Cart.jsx'
import WishList from './components/WishList/WishList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('dataSets.json')
          },
          {
            path: '/home/laptops',
            element: <Laptops></Laptops>,
            loader: () => fetch('dataSets.json'),
          },
          {
            path: '/home/phones',
            element: <Phones></Phones>,
            loader: () => fetch('dataSets.json'),
          },
          {
            path: '/home/accessories',
            element: <Accessories></Accessories>,
            loader: () => fetch('dataSets.json'),
          },
          {
            path: '/home/smartwatches',
            element: <SmartWatches></SmartWatches>
          },
          {
            path: '/home/macbooks',
            element: <Macbooks></Macbooks>
          },
          {
            path: '/home/iphones',
            element: <Iphones></Iphones>
          },
        ]
      },
      {
        path: 'products/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('dataSets.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('dataSets.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/',
            element: <Cart></Cart>,
            loader: () => fetch('dataSets.json')
          },
          {
            path: '/dashboard/wishlist',
            element: <WishList></WishList>,
            loader: () => fetch('dataSets.json')
          }
        ]
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
