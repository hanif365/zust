const getPosts = async (count) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${count}`
    );
    const posts = await res.json();
    console.log(Array.isArray(posts));
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Posts = async () => {
  const posts = await getPosts(10);
  console.log(posts);

  return (
    <div className="m-10">
      {posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
};

export default Posts;
