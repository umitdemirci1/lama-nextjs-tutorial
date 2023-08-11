"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const handleSubmit = async (e) => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    {response.status === 201 ? router.push("/dashboard/login") : 
    <div>Error occured!</div>}
  } catch (error) {
    setError(true);
  }
};

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter()
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.formElement}
          type="text"
          placeholder="user name"
          required
        />
        <input
          className={styles.formElement}
          type="email"
          placeholder="e-mail"
          required
        />
        <input
          className={styles.formElement}
          type="password"
          placeholder="password"
          required
        />
        <button className={styles.register}>Register</button>
      </form>
      <Link className={styles.existingAccount} href={"/dashboard/login"}>
        Login with an existing account
      </Link>
      {error && "Something went wrong!"}
    </div>
  );
};

export default Register;
