import Image from 'next/image'
import { Lightbulb, Radio, Palette } from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: JSX.Element
  image: string
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Custom Light Installations',
      description:
        "Transform any space with our bespoke lighting solutions. We create immersive environments that captivate and inspire. Our team of expert designers and technicians work closely with you to bring your vision to life, whether it's for a permanent installation or a temporary event.",
      icon: <Lightbulb className='h-16 w-16 text-purple-400' />,
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      title: 'Electronics for Events',
      description:
        'Elevate your events with our cutting-edge electronic solutions. From advanced sound systems to interactive displays, we provide the technology to make your event truly unforgettable. Our team ensures seamless integration and operation, allowing you to focus on creating amazing experiences for your audience.',
      icon: <Radio className='h-16 w-16 text-purple-400' />,
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      title: 'Unique Design Solutions',
      description:
        'We specialize in creating innovative designs that blend form and function seamlessly. Our approach combines aesthetic beauty with practical usability, resulting in spaces and installations that are both stunning and functional. We work across various industries, bringing creativity and technical expertise to every project.',
      icon: <Palette className='h-16 w-16 text-purple-400' />,
      image: '/placeholder.svg?height=400&width=600'
    }
  ]

  return (
    <div className='min-h-screen'>
      <main className='py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-12 text-center text-4xl font-bold md:text-5xl'>
            Our Services
          </h1>
          <div className='space-y-20'>
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className='md:w-1/2'>
                  <div className='mb-4 flex justify-center'>{service.icon}</div>
                  <h2 className='mb-4 text-center text-3xl font-semibold md:text-left'>
                    {service.title}
                  </h2>
                  <p className='mb-4 text-gray-300'>{service.description}</p>
                </div>
                <div className='md:w-1/2'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className='rounded-lg shadow-lg'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Services
