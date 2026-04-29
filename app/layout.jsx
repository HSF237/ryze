import './globals.css';
import { Providers } from './Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AnnouncementBar from '@/components/AnnouncementBar';

export default function RootLayout({ children }) {
        return (
                  <html lang="en">
                        <body className="bg-white text-ink-900 font-sans">
                                <Providers>
                                          <AnnouncementBar />
                                          <Navbar />
                                          <main>{children}</main>main>
                                          <Footer />
                                          <CartDrawer />
                                </Providers>Providers>
                        </body>body>
                  </html>html>
                );
}</html>
