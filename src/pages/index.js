import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TaskBar from '../components/taskbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To-Do APP</title>
        <link rel="icon" href="/favicon-16x16.png" type="image/x-icon"></link>
      </Head>
      <h1 className={styles.title}>To Do APP</h1>
      <TaskBar></TaskBar>
    </div>
  )
}
