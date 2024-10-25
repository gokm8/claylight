import Image from 'next/image'

const About: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <main className='py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-12 text-center text-4xl font-bold md:text-5xl'>
            Om ClayLight
          </h1>
          <div className='flex flex-col items-center gap-12 md:flex-row'>
            <div className='md:w-1/2'>
              <Image
                src='/placeholder.svg?height=600&width=800'
                alt='ClayLight Team'
                width={800}
                height={600}
                className='rounded-lg shadow-lg'
              />
            </div>
            <div className='space-y-6 md:w-1/2'>
              <h2 className='mb-4 text-3xl font-semibold'>Vores mission</h2>
              <p className='text-gray-300'>
                Hos ClayLight er vores mission at forvandle rum og events gennem
                innovative belysnings- og elektronikløsninger. Vi stræber efter
                at skabe immersive oplevelser, der inspirerer, engagerer og
                efterlader et varigt indtryk på publikum verden over.
              </p>
              <h2 className='mb-4 text-3xl font-semibold'>Vores vision</h2>
              <p className='text-gray-300'>
                Vi forestiller os en verden, hvor lys og teknologi smelter
                problemfrit sammen for at forbedre menneskelige oplevelser.
                Vores mål er at stå i spidsen for denne integration og skubbe
                grænserne for, hvad der er muligt inden for lysdesign og
                elektroniske innovationer.
              </p>
              <h2 className='mb-4 text-3xl font-semibold'>Vores team</h2>
              <p className='text-gray-300'>
                ClayLight drives af et alsidigt team af passionerede fagfolk,
                herunder lysdesignere, elektronikingeniører, softwareudviklere
                og projektledere. Vores samlede ekspertise gør os i stand til at
                håndtere komplekse projekter og levere enestående resultater.
              </p>
              <p className='text-gray-300'>
                Med mange års erfaring i branchen har vi finpudset vores
                kompetencer til at levere projekter, der ikke bare opfylder, men
                også overgår vores kunders forventninger. Uanset om det er
                intime galleriområder eller storskalige udendørs events,
                tilfører vi kreativitet og teknisk ekspertise til hvert eneste
                projekt, vi påtager os.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
