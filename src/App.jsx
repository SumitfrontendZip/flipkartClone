
import './App.css'
import { Home } from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotPageFound from './Components/NotPageFound/NotPageFound';
import AmazonSellerProducts from './Components/FlipkartApi/FlipkartApi';

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
