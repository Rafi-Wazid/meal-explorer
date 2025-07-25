import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className='flex-1 py-6'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;