import Header from './components/Header';
import Hero from './components/Hero';
import ChatInterface from './components/ChatInterface';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <main>
        <Hero />
        <ChatInterface />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
