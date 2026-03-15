import Header from './components/Header'
import Hero from './components/Hero'
import Strengths from './components/Strengths'
import Pricing from './components/Pricing'
import Steps from './components/Steps'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Pricing />
        <Steps />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
