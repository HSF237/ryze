import './globals.css';
import { Providers } from './Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AnnouncementBar from '@/components/AnnouncementBar';

export default function RootLayout({ children }) {
<<<<<<< HEAD
  return (
    <html lang="en">
      <body className="bg-white text-ink-900 font-sans">
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
=======
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
>>>>>>> faf6e9e88cf736509f21220cc4e4c2e127aa054c
