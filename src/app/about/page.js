import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - Innovate Engineering',
  description: 'Learn about Innovate Engineering - Quality service provider of engineering solutions since 2018, located in Coimbatore, Tamil Nadu, India.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
