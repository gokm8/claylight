import Hero from '@/components/home-page/hero'
import Services from '@/components/home-page/services'
import About from '@/components/home-page/about'
import Portfolio from '@/components/home-page/portfolio'
import Contact from '@/components/home-page/contact'

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default Home
