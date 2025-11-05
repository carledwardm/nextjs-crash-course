export const BlogPost = async ({params}) => {
    const { id } = await params;
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json());
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default BlogPost;