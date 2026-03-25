import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
// import Achievements from './components/Achievements'
import Programs from './components/Programs'
import FAQ from './components/FAQ'
// import Testimonials from './components/Testimonials'
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
        {/* <Achievements /> */}
        <Programs />
        <FAQ />
        {/* <Testimonials /> */}
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
