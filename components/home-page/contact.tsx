import { Phone, Mail, MapPin } from 'lucide-react'
import styles from './Contact.module.css'

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone />,
      label: '+45 50 50 50 50',
      href: 'tel:+4550505050'
    },
    {
      icon: <Mail />,
      label: 'info@claylight.com',
      href: 'mailto:info@claylight.com'
    },
    {
      icon: <MapPin />,
      label: 'Møllelodden 6, 2791 Dragør',
      href: 'https://maps.app.goo.gl/3x3x3x3x3x3x3x3x'
    }
  ]
  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='mb-12 text-center'>Kontakt os</h1>
        <div className='flex flex-col gap-12 md:flex-row'>
          <div className='md:w-1/2'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-300'
                >
                  Navn
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white'
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-300'
                >
                  Emne
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-300'
                >
                  Besked
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white'
                ></textarea>
              </div>
              <div>
                <button type='submit' className={styles.button}>
                  Send besked
                </button>
              </div>
            </form>
          </div>

          {/* contact info */}
          <div className='space-y-6 md:w-1/2'>
            {contactInfo.map((item, index) => (
              <div className='flex items-center' key={index}>
                <span className={styles.icon}>{item.icon}</span>
                <span className='text-neutral-300'>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
