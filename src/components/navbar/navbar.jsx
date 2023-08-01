import Link from "next/link";
import styles from './navbar.module.css'
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard'
    }
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href='/'>lamamia</Link>
            </div>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                ))}
                <button className={styles.logout}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;