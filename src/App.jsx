
import './App.css'
import { Home } from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotPageFound from './Components/NotPageFound/NotPageFound';
import ProductDescription from './Components/ProductDecription/ProductDescription';
 
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home />
        </>
      )
    },{
      path:'/:category/:id',
      element:<ProductDescription/>
    },
    {
      path:'*',
      element:<NotPageFound/>
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    
    </>
  )
}

export default App
