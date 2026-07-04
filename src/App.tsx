import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
// import { Experience } from './components/Experience';
// import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingResume } from './components/FloatingResume';
import { SEO } from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-dark text-white overflow-x-hidden">
        <SEO />
        <Navbar />
        <FloatingResume />
        <main>
          <Hero />
          <About />
          <Skills />
          {/* <Experience /> */}
          {/* <Education /> */}
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1E293B',
              color: '#F8FAFC',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '12px',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#F8FAFC',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#F8FAFC',
              },
            },
          }}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;
