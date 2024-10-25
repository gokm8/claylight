import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string
  description: string
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'City Lights Festival',
      description: 'Interactive light installation'
    },
    {
      title: 'Tech Conference 2023',
      description: 'Custom stage and booth lighting'
    },
    {
      title: 'Harmony Hotel Lobby',
      description: 'Permanent light art installation'
    },
    {
      title: 'Music in the Park',
      description: 'Outdoor event lighting and sound'
    },
    {
      title: 'Corporate HQ Redesign',
      description: 'Smart lighting integration'
    },
    { title: 'Art Gallery Opening', description: 'Exhibition lighting design' }
  ]

  return (
    <section id='portfolio' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-12 text-center'>Vores arbejde</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-lg'
            >
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={project.title}
                width={400}
                height={300}
                className='h-auto w-full transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <div className='text-center'>
                  <h3 className='mb-2'>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-12 text-center'>
          <Link
            href='/portfolio'
            className='rounded-full bg-purple-600 px-6 py-3 font-bold text-white transition duration-300 hover:bg-purple-700'
          >
            Se vores portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
