import styles from "./styles/Podcast.module.css"

export const Podcast = ({ episode }) => {
  return (
    <iframe
      src={"https://open.spotify.com/embed/episode/" + episode}
      width="80%"
      height="232"
      frameBorder="0"
      allowTransparency="true"
      allow="encrypt-media"
      className={styles.podcast}
    ></iframe>
  )
}
