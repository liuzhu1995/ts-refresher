export type BlogPost = {
  id: number
  title: string
  body: string
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
            <div className='card'>
              <div className='card-body'>
                <h2 className='card-title'>{post.title}</h2>
                <p className='card-text'>{post.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
