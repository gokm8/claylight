import Image from 'next/image'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  image: string
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Kulturhuset',
      description: 'Interaktiv lysinstallation og lyd for Kulturhuset',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      title: 'Kulturhuset',
      description: 'Custom stage and booth lighting for a major tech event',
      image: '/placeholder.svg?height=400&width=600'
    }
  ]

  return (
    <div className='min-h-screen'>
      <main className='py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-12 text-center text-4xl font-bold md:text-5xl'>
            Our Portfolio
          </h1>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='group relative overflow-hidden rounded-lg shadow-lg'
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='h-auto w-full transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <h3 className='mb-2 px-4 text-center text-xl font-semibold'>
                    {project.title}
                  </h3>
                  <p className='mb-4 px-4 text-center text-sm text-gray-300'>
                    {project.description}
                  </p>
                  <Link
                    href='#'
                    className='rounded bg-purple-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-purple-700'
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Portfolio
