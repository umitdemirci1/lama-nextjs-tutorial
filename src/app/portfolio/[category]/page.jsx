import Button from '@/components/Button/button';
import styles from './page.module.css'

const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Creative Portfolio</h2>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam sequi repudiandae modi doloremque vel atque necessitatibus! Pariatur totam ullam sapiente doloribus debitis temporibus? Asperiores, architecto. Libero modi omnis porro praesentium.</p>
                    <Button url={"#"} text={"See More"} />
                </div>
                <div className={styles.imageContainer}>
                
                </div>
            </div>

        </div>
    );
}

export default Category;