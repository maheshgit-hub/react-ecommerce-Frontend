import React from 'react';
import Counter from './features/counter/Counter';
import './App.css';
import ProductList from './features/product/components/ProductList';
import Home from './pages/Home';
import Login from './features/auth/component/Login';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import ProductDetails from "./features/product/components/ProductDetails"
import ProductDetailPage from './pages/ProductDetailsPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>),
  },
  {
    path: "/cart",
    element: (<CartPage></CartPage>),
  },
  {
    path: "/checkout",
    element: (<CheckoutPage></CheckoutPage>)
  },
  {
    path: "/product-detail",
    element: (<ProductDetailPage></ProductDetailPage>)
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
