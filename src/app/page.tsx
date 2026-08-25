import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="flex bg-pink-200 w-full h-full items-center">
      <main className="flex flex-col items-center w-full">
        <Header />
        <Footer />
      </main>
    </div>
  );
}
