import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Industries from '@/components/Industries';
import Quality from '@/components/Quality';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Industries />
      <Quality />
      <Contact />
      <Footer />
    </main>
  );
}
