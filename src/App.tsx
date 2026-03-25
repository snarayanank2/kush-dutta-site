import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Programs from './components/Programs'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Programs />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
