type BlogPost = {
  id: string
  title: string
  text: string
}
type BlogPostsProps = {
  posts: BlogPost[]
}
export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div id='blog-posts'>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
