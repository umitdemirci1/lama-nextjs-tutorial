import styles from './page.module.css'
import illustration from 'public/illustration.png'
import websites from 'public/websites.jpg'
import apps from 'public/apps.jpg'
import Link from 'next/link'

const pngs = [
    {
        name: 'Illustration',
        image: illustration,
        href: 'portfolio/illustrations'
    },
    {
        name: 'Websites',
        image: websites,
        href: 'portfolio/websites'
    },
    {
        name: 'Applications',
        image: apps,
        href: 'portfolio/applications'
    }
]
const Portfolio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gallery}>
                <h3 className={styles.selectTitle}>Choose a gallery</h3>
                <div className={styles.imageContainer}>
                    {pngs.map((png) => (
                        <Link href={png.href} className={styles.frame}>
                            <h2 className={styles.categoryName}>{png.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;