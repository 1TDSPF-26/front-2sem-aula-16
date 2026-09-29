<<<<<<< HEAD
import {StrictMode } from 'react'
=======
import { StrictMode } from 'react'
>>>>>>> feature/exemplo-pf0670
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error/index.tsx'

const router = createBrowserRouter([
<<<<<<< HEAD
  {path:"/", element :<App/>, errorElement:<Error/>, children:[
=======
  {path:"/", element : <App/>, errorElement:<Error/>, children:[
>>>>>>> feature/exemplo-pf0670
    {path: "/", element:<Home/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/editar-produtos/:id", element:<EditarProdutos/>}
  ]}
]);

<<<<<<< HEAD

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
=======
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
>>>>>>> feature/exemplo-pf0670
  </StrictMode>,
)
