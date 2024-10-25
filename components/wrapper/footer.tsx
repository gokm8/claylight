import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

interface Link {
  href: string
  label: string
}

interface SocialLink {
  href: string
  icon: JSX.Element
}

const Footer: React.FC = () => {
  const links: Link[] = [
    { href: '/', label: 'Forside' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/om', label: 'Om' },
    { href: '/kontakt', label: 'Kontakt' }
  ]

  const socialLinks: SocialLink[] = [
    { href: 'https://www.instagram.com', icon: <Instagram /> },
    { href: 'https://www.facebook.com', icon: <Facebook /> },
    { href: 'https://www.linkedin.com', icon: <Linkedin /> }
  ]

  return (
    <footer className='py-12 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div className='mb-6 md:mb-0'>
            <Link href='/' className={styles.logo}>
              ClayLight
            </Link>
          </div>
          <nav className='mb-6 md:mb-0'>
            <ul className='flex flex-wrap justify-center space-x-6'>
              {links.map(link => (
                <li key={link.href}>
                  <Link className={styles.footerLink} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex space-x-4'>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.footerSocial}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} ClayLight. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
