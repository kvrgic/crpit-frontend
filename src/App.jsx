import React from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Root komponenta aplikacije – prikazuje Navbar, dinamički sadržaj i uslovno prikazuje Footer
function App() {
  const location = useLocation();
  const hideFooterOnRouters = ['/login', '/register', '/contact-us', '/dashboard', '/dashboard/add-new-post', '/dashboard/manage-items', '/dashboard/users', '/dashboard/update-items'];
  const shouldHideFooter = hideFooterOnRouters.some(route =>
  location.pathname === route || location.pathname.startsWith('/dashboard/update-items/')
  );

  return (
    <>
      <div className='bg-bgPrimary min-h-screen flex flex-col'>
        <Navbar/>
        <div className='flex-grow'>
          <Outlet/>
        </div>
        {!shouldHideFooter && <Footer/>}
      </div>
    </>
  )
}

export default App
