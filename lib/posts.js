import fetch from "node-fetch"; //サーバーサイドで実行されるAPIにフェッチするための記述
//サーバーサイドで動くnode.jsのfetchを使うための記述
const apiUrl = "https://jsonplaceholder.typicode.com/posts"; //エンドポイントの定義

export async function getAllPostsData() { //データにアクセスするためのフェッチ関数
  const res = await fetch(new URL(apiUrl)); //データの取得
  const posts = await res.json(); //json形式に変換
  return posts; //関数の返り値
}//asyncとawaitは非同期処理の構文。asyncは関数宣言。awaitは結果が返されるまで待機する演算子

//IDの一覧を取得
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: { //getStaticPathsをpagesで使う場合、必ずフィールド名にparamsが必要
        id: String(post.id),
      },
    };
  });
}
//特定のIDを使ってbuild時にデータベースからデータを取得
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  return post;
}