import './App.css'
import { Home } from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotPageFound from './Components/NotPageFound/NotPageFound';
import ProductDescription from './Components/ProductDecription/ProductDescription';
import Address from './Components/LoginPage/Address';
import { Navbar } from './Components/Navbar/Navbar';
import LoginPageContainer1 from './Components/LoginPage/LoginPageContainer1';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home />
        </>
      )
    }, {
      path: '/:category/:id',
      element: <ProductDescription />
    },
    {
      path: '/login',
      element: <><Navbar /><div className="containerLogin"><LoginPageContainer1 /> </div> </>
    },
    {
      path: '/address',
      element: <><Navbar /><div className="containerLogin"><Address /> </div> </>
    },
    {
      path: '*',
      element: <NotPageFound />
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
