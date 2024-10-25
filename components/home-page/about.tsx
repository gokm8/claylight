import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='mb-8 md:mb-0 md:w-1/2'>
            <Image
              src='/placeholder.svg?height=400&width=600'
              alt='ClayLight Team'
              width={600}
              height={400}
              className='hidden rounded-lg shadow-lg md:block'
            />
          </div>
          <div className='md:w-1/2 md:pl-12'>
            <h2 className='mb-6'>Om ClayLight</h2>
            <p className='mb-6'>
              Hos ClayLight brænder vi for at udforske nye muligheder inden for
              lys og teknologi. Vores erfarne designere og ingeniører skaber
              engagerende og mindeværdige oplevelser ved at kombinere innovativ
              belysning med avanceret elektronik.
            </p>
            <p>
              Med mange års erfaring i branchen har vi finpudset vores
              færdigheder til at levere projekter, der ikke bare opfylder, men
              overgår vores kunders forventninger. Fra intime galleriområder til
              storskalige udendørs arrangementer bringer vi kreativitet og
              teknisk ekspertise til hvert eneste projekt, vi påtager os.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
