import Link from 'next/link'
import Image from 'next/image'
import styles from './Portfolio.module.css'

interface Project {
  title: string
  description: string
  image: string
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'City Lights Festival',
      description: 'Interactive light installation',
      image: '/assets/portfolio/rumors.png'
    },
    {
      title: 'Tech Conference 2023',
      description: 'Custom stage and booth lighting',
      image: '/assets/portfolio/rumors.png'
    },
    {
      title: 'Harmony Hotel Lobby',
      description: 'Permanent light art installation',
      image: '/assets/portfolio/rumors.png'
    }
  ]

  return (
    <section id='portfolio' className='py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='mb-12 text-start'>Vores arbejde</h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-lg'
            >
              <div className='relative'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='h-auto w-full transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black opacity-40'></div>
              </div>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <div className='text-center'>
                  <h2 className='mb-2'>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-12 text-center'>
          <Link
            href='/portfolio'
            className={styles.button}
          >
            Se vores portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
