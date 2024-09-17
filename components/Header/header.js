
import Link from 'next/link';
import logoImg from '@/assets/logo.png'

import styles from './header.module.css';
import Image from 'next/image';
import HeaderBackground from '@/components/Header/background';
import NavLink from '@/components/Header/nav-link';

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logoImg} alt='logo' priority />
          Next level food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'} >Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>

  )
}