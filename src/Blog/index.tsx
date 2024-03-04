import { ReactNode, useEffect, useState } from 'react'
import { get } from './util/http'
import BlogPosts, { type BlogPost } from './components/BlogPosts'
import ErrorMessage from './components/ErrorMessage'
import { log } from 'console'

type RawDataBlogPost = {
  id: number
  userId: number
  title: string
  body: string
}
export default function Blog() {
  const [fetchPosts, setFetchPosts] = useState<BlogPost[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    setLoading(true)
    async function fetchPosts() {
      try {
        const data = (await get(
          'https://jsonplaceholder.typicode.com/posts'
        )) as RawDataBlogPost[]
        const blogPosts = data.map((rawPost) => ({
          id: rawPost.id,
          title: rawPost.title,
          body: rawPost.body,
        }))
        setFetchPosts(blogPosts)
        setLoading(false)
        setError(undefined)
      } catch (error) {
        if (error instanceof Error) {
          console.log(6666)
          setFetchPosts(undefined)
          setLoading(false)
          setError(error.message)
        }
      }
    }
    // fetchPosts()
  }, [])

  let content: ReactNode

  if (error) {
    content = <ErrorMessage text={error} />
  }

  if (loading) {
    content = <div>Loading ...</div>
  }

  if (fetchPosts) {
    content = <BlogPosts posts={fetchPosts}></BlogPosts>
  }

  return <main>{content}</main>
}
