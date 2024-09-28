import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing.tsx';
import LoginForm from './components/LoginForm.tsx';
import RegisterForm from './components/RegisterForm.tsx';
import { Provider } from 'react-redux'
import { store } from './app/store.ts';
import UserLayout from "./pages/UserLayout.tsx"
import Dashboard from "./pages/Dashboard.tsx"
import Profiles from './pages/Profiles.tsx';
import AllOrders from './pages/AllOrders.tsx';
import Pipeline from './pages/Pipeline.tsx';
import OrderManagement from './pages/OrderManagement.tsx';
import Inventory from './pages/Inventory.tsx';








const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
        children: [
          {
            path: "/login",
            element: <LoginForm  />
          },
          {
            path: "/register",
            element: <RegisterForm />
          }
        ]
      }, 
      {
        path: "/user/",
        element: <UserLayout />,
        children: [
          {
            path: ":userId/",
            element: <Dashboard />
          }, 
          {
            path: ":userId/profiles",
            element: <Profiles />
          },
          {
            path: ":userId/orders",
            element: <AllOrders />
          },
          {
            path: ":userId/pipeline/:orderId",
            element: <Pipeline />
          },
          {
            path: ":userId/order/:orderId",
            element: <OrderManagement />
          },
          {
            path: ":userId/inventory",
            element: <Inventory />
          }
        ]
      }
    ]

  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
