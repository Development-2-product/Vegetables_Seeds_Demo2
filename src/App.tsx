import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EnquiryProvider } from '@/context/EnquiryContext';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Products } from '@/pages/Products';
import { ProductDetail } from '@/pages/ProductDetail';
import { About } from '@/pages/About';
import { Categories } from '@/pages/Categories';
import { Gallery } from '@/pages/Gallery';
import { WhyUs } from '@/pages/WhyUs';
import { Contact } from '@/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <EnquiryProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </EnquiryProvider>
    </BrowserRouter>
  );
}
