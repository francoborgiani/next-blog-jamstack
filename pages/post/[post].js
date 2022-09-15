import MDXComponents from "../../components/MDXComponents";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MainLayout } from "../../components/layouts";

export default function Post({ source, frontmatter }) {
  return (
    <MainLayout>
      <MDXRemote {...source} components={MDXComponents} />
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug({ slug: params.post });

  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  console.log(posts);
  const paths = posts.map((post) => ({
    params: {
      post: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
