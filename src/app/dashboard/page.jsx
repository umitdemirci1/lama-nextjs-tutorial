"use client";

import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
};

export default Dashboard;
