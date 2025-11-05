export const BlogPage = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.slice(0, 5).map(post => (
                    <li key={post.id}>
                      <h3>{post.id}. {post.title}</h3>
                      <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default BlogPage;