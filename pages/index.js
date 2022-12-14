import Head from "next/head";
import { MainLayout } from "../components/layouts";
import { PostsList } from "../components/post/PostsList";
import { getAllFilesMetadata } from "../lib/mdx";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Borgi | Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MainLayout>
          <h1 className={styles.title}>Bienvenido a mi blog!</h1>
          <PostsList posts={posts} />
      </MainLayout>

    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
