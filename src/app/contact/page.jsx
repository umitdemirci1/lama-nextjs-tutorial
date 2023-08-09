import Image from "next/image";
import styles from "./page.module.css";
import contact from "public/contact.png";
import Button from "@/components/Button/button";

export const metadata = {
  title: "Lama Dev Contact Information",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src={contact} alt="" fill={true} className={styles.image} />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text={"Send"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
