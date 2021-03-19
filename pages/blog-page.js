import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts"; //libで取ってきたデータのインポート

export default function Blog ({ posts }) {
  return ( //postsをmap関数で繰り返し処理する。
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

//build時にサーバーサイドで実行される仕組み。
export async function getStaticProps() { //getStaticPropsはNest.jsの関数
  const posts = await getAllPostsData();
  return {
    props: { posts }, //propsは親から子に情報を渡す。
  };
};
