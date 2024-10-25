import Link from 'next/link'
import { Lightbulb, Radio, Palette } from 'lucide-react'
import { Button } from '../ui/button'
import styles from './Services.module.css'

interface Service {
  title: string
  description: string
  icon: JSX.Element
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Specialdesignede lysinstallationer',
      description:
        'Forvandl ethvert rum med vores skræddersyede belysningsløsninger.',
      icon: <Lightbulb className={styles.icon} />
    },
    {
      title: 'Elektronik til events',
      description:
        'Avanceret eventelektronik til at gøre din begivenhed til en uforglemmelig oplevelse.',
      icon: <Radio className={styles.icon} />
    },
    {
      title: 'Unikke designløsninger',
      description:
        'Innovative designs, der problemfrit forener form og funktion.',
      icon: <Palette className={styles.icon} />
    }
  ]

  return (
    <section id='services' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-12 text-center'>Vi er specialiseret i</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <div key={index} className='rounded-lg bg-gray-700 p-6 shadow-lg'>
              <div className='mb-4 flex justify-center'>{service.icon}</div>
              <h3 className='mb-2 text-center'>{service.title}</h3>
              <p className='mb-4 text-center'>{service.description}</p>
              <div className='text-center'>
                <Link href='/services' className={styles.button}>
                  Læs mere
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
