import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/wrapper/footer'
import Navbar from '@/components/wrapper/navbar'
import { ThemeProvider } from 'next-themes'

// for heading font
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700']
})

// for body font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'ClayLight',
  description: 'Forvandl rum med lys og innovation'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable} min-h-screen`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={false}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
