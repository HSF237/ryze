import './globals.css';
import { CartProvider } from '@/lib/cart';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AnnouncementBar from '@/components/AnnouncementBar';

export default function RootLayout({ children }) {
    return (
          <html lang="en">
                <body className="bg-white text-ink-900 font-sans">
                        <CartProvider>
                                  <AnnouncementBar />
                                  <Navbar />
                                  <main>{children}</main>main>
                                  <Footer />
                                  <CartDrawer />
                        </CartProvider>CartProvider>
                </body>body>
          </html>html>
        );
}</html>
