import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-text">
      <Navbar />

      <main>
        <Hero />
        <Testimonials />
      </main>

      <footer id="contact" className="bg-brand-teal text-white py-3 border-t-4 border-brand-orange">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h3 className="font-heading text-xl">Tanz der Kulturen</h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 font-sans text-md">
            <a href="mailto:info@tanz-der-kulturen.de" className="hover:text-brand-orange transition-colors flex items-center gap-2">
              ✉️ info@tanz-der-kulturen.de
            </a>
            <a href="tel:+4915152013306" className="hover:text-brand-orange transition-colors flex items-center gap-2">
              📞 +49 151 52013306
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App