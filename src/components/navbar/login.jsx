"use client";
import { signOut, useSession } from "next-auth/react";
import styles from "./navbar.module.css";

const Login = () => {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" ? (
        <button className={styles.logout} onClick={() => signOut("google")}>
          Logout
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Login;
