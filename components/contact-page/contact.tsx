import { Phone, Mail, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <main className='py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-12 text-center text-4xl font-bold md:text-5xl'>
            Contact Us
          </h1>
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
                    required
                    className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50'
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
                    required
                    className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50'
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
                    required
                    className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50'
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
                    required
                    className='mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50'
                  ></textarea>
                </div>
                <div>
                  <button
                    type='submit'
                    className='w-full rounded bg-purple-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-purple-700'
                  >
                    Send besked
                  </button>
                </div>
              </form>
            </div>
            <div className='space-y-8 md:w-1/2'>
              <h2 className='mb-4 text-2xl font-semibold'>Get in Touch</h2>
              <p className='mb-6 text-gray-300'>
                Vi vil meget gerne høre fra dig! Uanset om du har spørgsmål om
                vores tjenester, ønsker at drøfte et potentielt projekt, eller
                bare vil sige hej, er du velkommen til at kontakte os via
                kontaktinformationen nedenfor eller formularen på denne side.
              </p>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Phone className='mr-4 h-6 w-6 text-purple-400' />
                  <span>+45 50 50 50 50</span>
                </div>
                <div className='flex items-center'>
                  <Mail className='mr-4 h-6 w-6 text-purple-400' />
                  <span>info@claylight.com</span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='mr-4 h-6 w-6 text-purple-400' />
                  <span>Møllelodden 6, 2791 Dragør</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
