import Image from 'next/image';
import styles from './page.module.css'
import Button from '@/components/Button/button';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                    fill={true}
                    className={styles.image} />
                <div className={styles.imageText}>
                    <h1 className={styles.imageTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imageDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, optio nostrum quia totam facere velit aliquid natus consequatur ad nesciunt voluptatibus architecto laboriosam asperiores labore quod unde minus cupiditate placeat!
                        Dolorem excepturi quos libero obcaecati numquam. Ratione voluptatibus autem impedit quo ullam hic perferendis voluptas tempore? Quisquam veniam repudiandae, quidem distinctio asperiores, consectetur obcaecati autem mollitia ratione ut explicabo! Consequatur!
                        Atque non, commodi quae quas quaerat sequi. Architecto deleniti fuga optio quis! Voluptate quasi, laboriosam illum ipsam pariatur reiciendis, earum dolor, consequatur quam magnam accusantium repellendus nulla sapiente mollitia alias.
                        <br /><br />
                        At fugit quo sequi sit, perspiciatis quam. At nesciunt laborum enim? Corporis quibusdam consequuntur hic optio voluptas magni veritatis voluptates dolorum quos vitae temporibus, nostrum libero cupiditate maxime facilis exercitationem.
                        Quisquam sequi eveniet odio nihil? Iste cumque molestias impedit deleniti, obcaecati mollitia reprehenderit pariatur quasi, quisquam voluptatum excepturi voluptatibus. In unde itaque possimus eaque autem facere reiciendis iusto, necessitatibus sunt!</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias adipisci iure modi consectetur necessitatibus ea fugiat voluptatem quas, ratione, quia facilis tenetur possimus eaque distinctio temporibus in praesentium dolor!
                        Magni assumenda, culpa ipsam tempore cupiditate blanditiis tenetur fuga! Totam dolorum veniam ut. Aliquid doloribus placeat quo culpa laborum vel ipsa voluptas totam, quod explicabo neque dolore modi eaque facilis!
                        <br /><br />
                        - Creative Illustrations <br /><br />
                        - Dynamic Websites <br /><br />
                        - Fast and Handy Mobile Apps
                    </p>
                    <Button url={'/contact'} text={'Contact'} />
                </div>
            </div>
        </div>
    );
}

export default About;