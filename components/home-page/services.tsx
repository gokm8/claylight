'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Lightbulb, Radio, Palette } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import styles from './Services.module.css'

interface Service {
  id: string
  title: string
  description: string
  icon: JSX.Element
  image: string
  details: string
}

const services: Service[] = [
  {
    id: 'lighting',
    title: 'Specialdesignede lysinstallationer',
    description:
      'Forvandl ethvert rum med vores skræddersyede belysningsløsninger.',
    icon: <Lightbulb className={styles.icon} />,
    image: '/assets/services/serviceLight.png',
    details:
      'Vores specialdesignede lysinstallationer skaber unikke atmosfærer og stemninger. Vi arbejder tæt sammen med dig for at designe og implementere belysningsløsninger, der fremhæver arkitektur, skaber fokuspunkter og forbedrer den overordnede oplevelse af rummet.'
  },
  {
    id: 'events',
    title: 'Elektronik til events',
    description:
      'Avanceret eventelektronik til at gøre din begivenhed til en uforglemmelig oplevelse.',
    icon: <Radio className={styles.icon} />,
    image: '/assets/services/serviceLight.png',
    details:
      'Vores avancerede eventelektronik omfatter state-of-the-art lyd- og videosystemer, interaktive displays og specialeffekter. Vi sørger for, at din begivenhed ikke bare bliver set og hørt, men også husket for sin innovative teknologiske integration.'
  },
  {
    id: 'design',
    title: 'Unikke designløsninger',
    description:
      'Innovative designs, der problemfrit forener form og funktion.',
    icon: <Palette className={styles.icon} />,
    image: '/assets/services/serviceLight.png',
    details:
      'Vores designteam skaber innovative løsninger, der ikke kun ser fantastiske ud, men også fungerer perfekt. Fra custom møbler til interaktive installationer, vores designs er skræddersyet til at imødekomme dine specifikke behov og æstetiske præferencer.'
  }
]

export default function TabbedServices() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <section id='services' className='bg-neutral-900 py-20 text-neutral-50'>
      <div className='container mx-auto px-4'>
        <h1 className='mb-12'>Vi er specialiseret i</h1>
        <Tabs
          defaultValue={services[0].id}
          className='w-full'
          onValueChange={setActiveTab}
        >
          <TabsList className='grid h-auto w-full grid-cols-1 md:grid-cols-3'>
            {services.map(service => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className='flex items-center justify-center gap-2 py-4 data-[state=active]:bg-neutral-800'
              >
                {service.icon}
                <h2>{service.title}</h2>
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map(service => (
            <TabsContent key={service.id} value={service.id}>
              <Card className='border-none bg-neutral-800'>
                <CardContent className='p-6'>
                  <div className='flex flex-col gap-8 md:flex-row'>
                    <div className='w-full md:w-1/2'>
                      <Image
                        src={service.image}
                        alt={`Illustration for ${service.title}`}
                        width={600}
                        height={400}
                        className='h-64 w-full rounded-lg object-cover md:h-full'
                      />
                    </div>
                    <div className='w-full space-y-4 md:w-1/2'>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <p>{service.details}</p>
                      <div>
                        <Link href='/services' className={styles.button}>
                          Læs mere
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
