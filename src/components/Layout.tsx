import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { EnquiryModal } from '@/components/EnquiryModal';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <EnquiryModal />
    </>
  );
}
