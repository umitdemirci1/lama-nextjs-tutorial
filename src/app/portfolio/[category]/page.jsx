import Button from "@/components/Button/button";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  const header = params.category;
  const capitalizedHeader = header.charAt(0).toUpperCase() + header.slice(1);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{capitalizedHeader}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>Creative Portfolio</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi
            repudiandae modi doloremque vel atque necessitatibus! Pariatur totam
            ullam sapiente doloribus debitis temporibus? Asperiores, architecto.
            Libero modi omnis porro praesentium.
          </p>
          <Button url={"#"} text={"See More"} />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            fill={true}
            src={
              "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
