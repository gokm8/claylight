import Link from 'next/link'
import { Button } from '../ui/button'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <section className='relative flex h-screen items-center justify-center text-center'>
      {/* 
      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{
          backgroundImage: "url('/assets/hero-image.jpg')"
        }}
      />
      */}
      {/* <div className='absolute inset-0 z-10 bg-black opacity-60' /> */}
      <div className='relative z-20 mx-auto max-w-4xl px-4'>
        <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
          Forvandl rum med lys og innovation
        </h1>
        <p className='mb-8 text-xl md:text-2xl'>
          Specialdesignede lysinstallationer, avanceret eventelektronik og
          unikke designløsninger til uforglemmelige oplevelser
        </p>
        <Button asChild>
          <Link className={styles.button} href='#services'>
            Udforsk vores services
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero
