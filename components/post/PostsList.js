import React from "react";
import NextLink from "next/link";
import styles from "./styles/PostsList.module.css"

export const PostsList = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <NextLink key={post.slug} href={`/post/${post.slug}`}>
          <a className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </a>
        </NextLink>
      ))}
    </div>
  );
};
