'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  mobile?: boolean
}

const Navbar: React.FC = () => {
  const links = [
    { href: '/', label: 'Forside' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/om', label: 'Om' },
    { href: '/kontakt', label: 'Kontakt' }
  ]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='p-4'>
      {/* Desktop menu */}
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className={styles.logo}>
          ClayLight
        </Link>
        <div className='hidden space-x-4 md:flex'>
          {links.map(link => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu */}
        <button
          className='text-neutral-300 md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          {links.map(link => (
            <NavLink key={link.href} href={link.href} mobile>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  mobile = false
}) => (
  <Link
    href={href}
    className={`${styles.navLink} ${mobile ? 'block px-4 py-2' : ''}`}
  >
    {children}
  </Link>
)

export default Navbar
