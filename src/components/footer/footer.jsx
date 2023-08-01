import Image from 'next/image';
import styles from './footer.module.css'
import facebook from '../../../public/1.png'
import instagram from '../../../public/2.png'
import twitter from '../../../public/3.png'
import youtube from '../../../public/4.png'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>2023 Lamamia. All right reserved.</div>
            <div className={styles.social}>
                <Image src={facebook} alt='lama-dev-facebook' className={styles.icon} width={15} height={15} />
                <Image src={instagram} alt='lama-dev-instagram' className={styles.icon} width={15} height={15} />
                <Image src={twitter} alt='lama-dev-twitter' className={styles.icon} width={15} height={15} />
                <Image src={youtube} alt='lama-dev-youtube' className={styles.icon} width={15} height={15} />
            </div>
        </div>
    );
}

export default Footer;